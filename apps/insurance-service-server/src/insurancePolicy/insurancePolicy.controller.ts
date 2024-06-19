import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InsurancePolicyService } from "./insurancePolicy.service";
import { InsurancePolicyControllerBase } from "./base/insurancePolicy.controller.base";

@swagger.ApiTags("insurancePolicies")
@common.Controller("insurancePolicies")
export class InsurancePolicyController extends InsurancePolicyControllerBase {
  constructor(protected readonly service: InsurancePolicyService) {
    super(service);
  }
}
