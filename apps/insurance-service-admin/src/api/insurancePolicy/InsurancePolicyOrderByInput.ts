import { SortOrder } from "../../util/SortOrder";

export type InsurancePolicyOrderByInput = {
  coverageAmount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  effectiveDate?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  insuranceAgentId?: SortOrder;
  policyNumber?: SortOrder;
  premiumAmount?: SortOrder;
  updatedAt?: SortOrder;
};
