import { InsurancePolicy as TInsurancePolicy } from "../api/insurancePolicy/InsurancePolicy";

export const INSURANCEPOLICY_TITLE_FIELD = "policyNumber";

export const InsurancePolicyTitle = (record: TInsurancePolicy): string => {
  return record.policyNumber?.toString() || String(record.id);
};
