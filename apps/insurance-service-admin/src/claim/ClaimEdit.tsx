import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { InsurancePolicyTitle } from "../insurancePolicy/InsurancePolicyTitle";

export const ClaimEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
