import * as graphql from "@nestjs/graphql";
import { InsurancePolicyResolverBase } from "./base/insurancePolicy.resolver.base";
import { InsurancePolicy } from "./base/InsurancePolicy";
import { InsurancePolicyService } from "./insurancePolicy.service";

@graphql.Resolver(() => InsurancePolicy)
export class InsurancePolicyResolver extends InsurancePolicyResolverBase {
  constructor(protected readonly service: InsurancePolicyService) {
    super(service);
  }
}
