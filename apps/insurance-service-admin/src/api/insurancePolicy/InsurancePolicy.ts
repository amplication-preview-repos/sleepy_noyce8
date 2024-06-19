import { Claim } from "../claim/Claim";
import { Customer } from "../customer/Customer";
import { InsuranceAgent } from "../insuranceAgent/InsuranceAgent";

export type InsurancePolicy = {
  claims?: Array<Claim>;
  coverageAmount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  effectiveDate: Date | null;
  expiryDate: Date | null;
  id: string;
  insuranceAgent?: InsuranceAgent | null;
  policyNumber: string | null;
  premiumAmount: number | null;
  updatedAt: Date;
};
