import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InsurancePolicyListRelationFilter } from "../insurancePolicy/InsurancePolicyListRelationFilter";

export type InsuranceAgentWhereInput = {
  agencyName?: StringNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  insurancePolicies?: InsurancePolicyListRelationFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
};
