import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { INSURANCEAGENT_TITLE_FIELD } from "../insuranceAgent/InsuranceAgentTitle";

export const InsurancePolicyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InsurancePolicies"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
