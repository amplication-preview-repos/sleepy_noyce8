import { ClaimListRelationFilter } from "../claim/ClaimListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InsuranceAgentWhereUniqueInput } from "../insuranceAgent/InsuranceAgentWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type InsurancePolicyWhereInput = {
  claims?: ClaimListRelationFilter;
  coverageAmount?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
  effectiveDate?: DateTimeNullableFilter;
  expiryDate?: DateTimeNullableFilter;
  id?: StringFilter;
  insuranceAgent?: InsuranceAgentWhereUniqueInput;
  policyNumber?: StringNullableFilter;
  premiumAmount?: FloatNullableFilter;
};
