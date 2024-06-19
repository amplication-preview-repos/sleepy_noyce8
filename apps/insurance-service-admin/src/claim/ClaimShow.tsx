import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { INSURANCEPOLICY_TITLE_FIELD } from "../insurancePolicy/InsurancePolicyTitle";

export const ClaimShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
