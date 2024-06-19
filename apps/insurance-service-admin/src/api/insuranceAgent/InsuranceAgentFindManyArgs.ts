import { InsuranceAgentWhereInput } from "./InsuranceAgentWhereInput";
import { InsuranceAgentOrderByInput } from "./InsuranceAgentOrderByInput";

export type InsuranceAgentFindManyArgs = {
  where?: InsuranceAgentWhereInput;
  orderBy?: Array<InsuranceAgentOrderByInput>;
  skip?: number;
  take?: number;
};
