import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InsurancePolicyServiceBase } from "./base/insurancePolicy.service.base";

@Injectable()
export class InsurancePolicyService extends InsurancePolicyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
