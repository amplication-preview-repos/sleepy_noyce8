import { InsurancePolicyUpdateManyWithoutInsuranceAgentsInput } from "./InsurancePolicyUpdateManyWithoutInsuranceAgentsInput";

export type InsuranceAgentUpdateInput = {
  agencyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  insurancePolicies?: InsurancePolicyUpdateManyWithoutInsuranceAgentsInput;
  lastName?: string | null;
  phone?: string | null;
};
