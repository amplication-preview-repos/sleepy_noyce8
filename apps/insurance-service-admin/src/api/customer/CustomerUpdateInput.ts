import { InsurancePolicyUpdateManyWithoutCustomersInput } from "./InsurancePolicyUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  insurancePolicies?: InsurancePolicyUpdateManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
};
