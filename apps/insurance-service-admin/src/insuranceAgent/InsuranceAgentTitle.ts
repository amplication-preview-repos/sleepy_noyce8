import { InsuranceAgent as TInsuranceAgent } from "../api/insuranceAgent/InsuranceAgent";

export const INSURANCEAGENT_TITLE_FIELD = "agencyName";

export const InsuranceAgentTitle = (record: TInsuranceAgent): string => {
  return record.agencyName?.toString() || String(record.id);
};
