import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InsurancePolicyTitle } from "../insurancePolicy/InsurancePolicyTitle";

export const ClaimCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amountClaimed" source="amountClaimed" />
        <TextInput label="claimNumber" source="claimNumber" />
        <DateTimeInput label="dateOfClaim" source="dateOfClaim" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="insurancePolicy.id"
          reference="InsurancePolicy"
          label="InsurancePolicy"
        >
          <SelectInput optionText={InsurancePolicyTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
