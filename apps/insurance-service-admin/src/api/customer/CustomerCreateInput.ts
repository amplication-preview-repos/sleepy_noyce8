import { InsurancePolicyCreateNestedManyWithoutCustomersInput } from "./InsurancePolicyCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  email?: string | null;
  firstName?: string | null;
  insurancePolicies?: InsurancePolicyCreateNestedManyWithoutCustomersInput;
  lastName?: string | null;
  phone?: string | null;
};
