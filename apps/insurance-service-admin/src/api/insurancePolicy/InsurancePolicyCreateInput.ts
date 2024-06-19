import { ClaimCreateNestedManyWithoutInsurancePoliciesInput } from "./ClaimCreateNestedManyWithoutInsurancePoliciesInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { InsuranceAgentWhereUniqueInput } from "../insuranceAgent/InsuranceAgentWhereUniqueInput";

export type InsurancePolicyCreateInput = {
  claims?: ClaimCreateNestedManyWithoutInsurancePoliciesInput;
  coverageAmount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  effectiveDate?: Date | null;
  expiryDate?: Date | null;
  insuranceAgent?: InsuranceAgentWhereUniqueInput | null;
  policyNumber?: string | null;
  premiumAmount?: number | null;
};
