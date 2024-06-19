import { InsurancePolicyWhereUniqueInput } from "../insurancePolicy/InsurancePolicyWhereUniqueInput";

export type ClaimCreateInput = {
  amountClaimed?: number | null;
  claimNumber?: string | null;
  dateOfClaim?: Date | null;
  description?: string | null;
  insurancePolicy?: InsurancePolicyWhereUniqueInput | null;
  status?: "Option1" | null;
};
