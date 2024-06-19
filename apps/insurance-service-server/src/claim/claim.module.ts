import { Module } from "@nestjs/common";
import { ClaimModuleBase } from "./base/claim.module.base";
import { ClaimService } from "./claim.service";
import { ClaimController } from "./claim.controller";
import { ClaimGrpcController } from "./claim.grpc.controller";
import { ClaimResolver } from "./claim.resolver";

@Module({
  imports: [ClaimModuleBase],
  controllers: [ClaimController, ClaimGrpcController],
  providers: [ClaimService, ClaimResolver],
  exports: [ClaimService],
})
export class ClaimModule {}
