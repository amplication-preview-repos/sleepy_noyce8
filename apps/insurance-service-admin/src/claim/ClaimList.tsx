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
import { INSURANCEPOLICY_TITLE_FIELD } from "../insurancePolicy/InsurancePolicyTitle";

export const ClaimList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Claims"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
