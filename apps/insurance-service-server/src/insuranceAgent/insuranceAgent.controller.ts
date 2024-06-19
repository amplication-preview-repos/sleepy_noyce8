import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsuranceAgentService } from "./insuranceAgent.service";
import { InsuranceAgentControllerBase } from "./base/insuranceAgent.controller.base";

@swagger.ApiTags("insuranceAgents")
@common.Controller("insuranceAgents")
export class InsuranceAgentController extends InsuranceAgentControllerBase {
  constructor(protected readonly service: InsuranceAgentService) {
    super(service);
  }
}
