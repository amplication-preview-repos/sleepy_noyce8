import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClaimService } from "./claim.service";
import { ClaimControllerBase } from "./base/claim.controller.base";

@swagger.ApiTags("claims")
@common.Controller("claims")
export class ClaimController extends ClaimControllerBase {
  constructor(protected readonly service: ClaimService) {
    super(service);
  }
}
