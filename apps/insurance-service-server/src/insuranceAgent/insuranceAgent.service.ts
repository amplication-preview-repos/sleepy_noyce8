import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsuranceAgentServiceBase } from "./base/insuranceAgent.service.base";

@Injectable()
export class InsuranceAgentService extends InsuranceAgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
