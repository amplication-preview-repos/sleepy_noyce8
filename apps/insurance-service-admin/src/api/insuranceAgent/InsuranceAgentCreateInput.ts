import { InsurancePolicyCreateNestedManyWithoutInsuranceAgentsInput } from "./InsurancePolicyCreateNestedManyWithoutInsuranceAgentsInput";

export type InsuranceAgentCreateInput = {
  agencyName?: string | null;
  email?: string | null;
  firstName?: string | null;
  insurancePolicies?: InsurancePolicyCreateNestedManyWithoutInsuranceAgentsInput;
  lastName?: string | null;
  phone?: string | null;
};
