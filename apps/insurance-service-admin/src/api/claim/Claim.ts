import { InsurancePolicy } from "../insurancePolicy/InsurancePolicy";

export type Claim = {
  amountClaimed: number | null;
  claimNumber: string | null;
  createdAt: Date;
  dateOfClaim: Date | null;
  description: string | null;
  id: string;
  insurancePolicy?: InsurancePolicy | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
