import { Module } from "@nestjs/common";
import { InsurancePolicyModuleBase } from "./base/insurancePolicy.module.base";
import { InsurancePolicyService } from "./insurancePolicy.service";
import { InsurancePolicyController } from "./insurancePolicy.controller";
import { InsurancePolicyGrpcController } from "./insurancePolicy.grpc.controller";
import { InsurancePolicyResolver } from "./insurancePolicy.resolver";

@Module({
  imports: [InsurancePolicyModuleBase],
  controllers: [InsurancePolicyController, InsurancePolicyGrpcController],
  providers: [InsurancePolicyService, InsurancePolicyResolver],
  exports: [InsurancePolicyService],
})
export class InsurancePolicyModule {}
