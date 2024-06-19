import * as graphql from "@nestjs/graphql";
import { ClaimResolverBase } from "./base/claim.resolver.base";
import { Claim } from "./base/Claim";
import { ClaimService } from "./claim.service";

@graphql.Resolver(() => Claim)
export class ClaimResolver extends ClaimResolverBase {
  constructor(protected readonly service: ClaimService) {
    super(service);
  }
}
