import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { InsurancePolicyTitle } from "../insurancePolicy/InsurancePolicyTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="firstName" source="firstName" />
        <ReferenceArrayInput
          source="insurancePolicies"
          reference="InsurancePolicy"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InsurancePolicyTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phone" source="phone" />
      </SimpleForm>
    </Create>
  );
};
