import * as graphql from "@nestjs/graphql";
import { InsuranceAgentResolverBase } from "./base/insuranceAgent.resolver.base";
import { InsuranceAgent } from "./base/InsuranceAgent";
import { InsuranceAgentService } from "./insuranceAgent.service";

@graphql.Resolver(() => InsuranceAgent)
export class InsuranceAgentResolver extends InsuranceAgentResolverBase {
  constructor(protected readonly service: InsuranceAgentService) {
    super(service);
  }
}
