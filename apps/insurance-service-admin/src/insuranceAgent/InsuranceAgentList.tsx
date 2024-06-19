import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const InsuranceAgentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"InsuranceAgents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="agencyName" source="agencyName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phone" source="phone" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
