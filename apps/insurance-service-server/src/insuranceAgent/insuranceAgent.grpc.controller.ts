import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsuranceAgentService } from "./insuranceAgent.service";
import { InsuranceAgentGrpcControllerBase } from "./base/insuranceAgent.grpc.controller.base";

@swagger.ApiTags("insuranceAgents")
@common.Controller("insuranceAgents")
export class InsuranceAgentGrpcController extends InsuranceAgentGrpcControllerBase {
  constructor(protected readonly service: InsuranceAgentService) {
    super(service);
  }
}
