import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClaimService } from "./claim.service";
import { ClaimGrpcControllerBase } from "./base/claim.grpc.controller.base";

@swagger.ApiTags("claims")
@common.Controller("claims")
export class ClaimGrpcController extends ClaimGrpcControllerBase {
  constructor(protected readonly service: ClaimService) {
    super(service);
  }
}
