import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InsurancePolicyWhereUniqueInput } from "../insurancePolicy/InsurancePolicyWhereUniqueInput";

export type ClaimWhereInput = {
  amountClaimed?: FloatNullableFilter;
  claimNumber?: StringNullableFilter;
  dateOfClaim?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  insurancePolicy?: InsurancePolicyWhereUniqueInput;
  status?: "Option1";
};
