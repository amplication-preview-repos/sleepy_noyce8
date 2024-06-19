import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { INSURANCEPOLICY_TITLE_FIELD } from "./InsurancePolicyTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { INSURANCEAGENT_TITLE_FIELD } from "../insuranceAgent/InsuranceAgentTitle";

export const InsurancePolicyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="coverageAmount" source="coverageAmount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="effectiveDate" source="effectiveDate" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="InsuranceAgent"
          source="insuranceagent.id"
          reference="InsuranceAgent"
        >
          <TextField source={INSURANCEAGENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="policyNumber" source="policyNumber" />
        <TextField label="premiumAmount" source="premiumAmount" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Claim"
          target="insurancePolicyId"
          label="Claims"
        >
          <Datagrid rowClick="show">
            <TextField label="amountClaimed" source="amountClaimed" />
            <TextField label="claimNumber" source="claimNumber" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="dateOfClaim" source="dateOfClaim" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="InsurancePolicy"
              source="insurancepolicy.id"
              reference="InsurancePolicy"
            >
              <TextField source={INSURANCEPOLICY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
