import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { INSURANCEAGENT_TITLE_FIELD } from "../insuranceAgent/InsuranceAgentTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="InsurancePolicy"
          target="customerId"
          label="InsurancePolicies"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
