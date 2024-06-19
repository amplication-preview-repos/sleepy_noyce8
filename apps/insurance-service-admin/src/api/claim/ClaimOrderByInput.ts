import { SortOrder } from "../../util/SortOrder";

export type ClaimOrderByInput = {
  amountClaimed?: SortOrder;
  claimNumber?: SortOrder;
  createdAt?: SortOrder;
  dateOfClaim?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  insurancePolicyId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
