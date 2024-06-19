import { ClaimUpdateManyWithoutInsurancePoliciesInput } from "./ClaimUpdateManyWithoutInsurancePoliciesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InsuranceAgentWhereUniqueInput } from "../insuranceAgent/InsuranceAgentWhereUniqueInput";

export type InsurancePolicyUpdateInput = {
  claims?: ClaimUpdateManyWithoutInsurancePoliciesInput;
  coverageAmount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  effectiveDate?: Date | null;
  expiryDate?: Date | null;
  insuranceAgent?: InsuranceAgentWhereUniqueInput | null;
  policyNumber?: string | null;
  premiumAmount?: number | null;
};
