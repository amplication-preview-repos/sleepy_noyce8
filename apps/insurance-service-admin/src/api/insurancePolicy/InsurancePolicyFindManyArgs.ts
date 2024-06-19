import { InsurancePolicyWhereInput } from "./InsurancePolicyWhereInput";
import { InsurancePolicyOrderByInput } from "./InsurancePolicyOrderByInput";

export type InsurancePolicyFindManyArgs = {
  where?: InsurancePolicyWhereInput;
  orderBy?: Array<InsurancePolicyOrderByInput>;
  skip?: number;
  take?: number;
};
