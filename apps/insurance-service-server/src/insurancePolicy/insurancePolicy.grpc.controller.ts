import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsurancePolicyService } from "./insurancePolicy.service";
import { InsurancePolicyGrpcControllerBase } from "./base/insurancePolicy.grpc.controller.base";

@swagger.ApiTags("insurancePolicies")
@common.Controller("insurancePolicies")
export class InsurancePolicyGrpcController extends InsurancePolicyGrpcControllerBase {
  constructor(protected readonly service: InsurancePolicyService) {
    super(service);
  }
}
