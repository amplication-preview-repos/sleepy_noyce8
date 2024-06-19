import { Module } from "@nestjs/common";
import { InsuranceAgentModuleBase } from "./base/insuranceAgent.module.base";
import { InsuranceAgentService } from "./insuranceAgent.service";
import { InsuranceAgentController } from "./insuranceAgent.controller";
import { InsuranceAgentGrpcController } from "./insuranceAgent.grpc.controller";
import { InsuranceAgentResolver } from "./insuranceAgent.resolver";

@Module({
  imports: [InsuranceAgentModuleBase],
  controllers: [InsuranceAgentController, InsuranceAgentGrpcController],
  providers: [InsuranceAgentService, InsuranceAgentResolver],
  exports: [InsuranceAgentService],
})
export class InsuranceAgentModule {}
