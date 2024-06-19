import { InsurancePolicy } from "../insurancePolicy/InsurancePolicy";

export type InsuranceAgent = {
  agencyName: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  insurancePolicies?: Array<InsurancePolicy>;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
