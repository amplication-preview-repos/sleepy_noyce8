import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { InsurancePolicyController } from "../insurancePolicy.controller";
import { InsurancePolicyService } from "../insurancePolicy.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  coverageAmount: 42.42,
  createdAt: new Date(),
  effectiveDate: new Date(),
  expiryDate: new Date(),
  id: "exampleId",
  policyNumber: "examplePolicyNumber",
  premiumAmount: 42.42,
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  coverageAmount: 42.42,
  createdAt: new Date(),
  effectiveDate: new Date(),
  expiryDate: new Date(),
  id: "exampleId",
  policyNumber: "examplePolicyNumber",
  premiumAmount: 42.42,
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    coverageAmount: 42.42,
    createdAt: new Date(),
    effectiveDate: new Date(),
    expiryDate: new Date(),
    id: "exampleId",
    policyNumber: "examplePolicyNumber",
    premiumAmount: 42.42,
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  coverageAmount: 42.42,
  createdAt: new Date(),
  effectiveDate: new Date(),
  expiryDate: new Date(),
  id: "exampleId",
  policyNumber: "examplePolicyNumber",
  premiumAmount: 42.42,
  updatedAt: new Date(),
};

const service = {
  createInsurancePolicy() {
    return CREATE_RESULT;
  },
  insurancePolicies: () => FIND_MANY_RESULT,
  insurancePolicy: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("InsurancePolicy", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InsurancePolicyService,
          useValue: service,
        },
      ],
      controllers: [InsurancePolicyController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /insurancePolicies", async () => {
    await request(app.getHttpServer())
      .post("/insurancePolicies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        effectiveDate: CREATE_RESULT.effectiveDate.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /insurancePolicies", async () => {
    await request(app.getHttpServer())
      .get("/insurancePolicies")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          effectiveDate: FIND_MANY_RESULT[0].effectiveDate.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /insurancePolicies/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/insurancePolicies"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /insurancePolicies/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/insurancePolicies"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        effectiveDate: FIND_ONE_RESULT.effectiveDate.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /insurancePolicies existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/insurancePolicies")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        effectiveDate: CREATE_RESULT.effectiveDate.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/insurancePolicies")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
