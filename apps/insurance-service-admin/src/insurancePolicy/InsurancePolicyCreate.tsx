import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { ClaimTitle } from "../claim/ClaimTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { InsuranceAgentTitle } from "../insuranceAgent/InsuranceAgentTitle";

export const InsurancePolicyCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="claims"
          reference="Claim"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ClaimTitle} />
        </ReferenceArrayInput>
        <NumberInput label="coverageAmount" source="coverageAmount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="effectiveDate" source="effectiveDate" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <ReferenceInput
          source="insuranceAgent.id"
          reference="InsuranceAgent"
          label="InsuranceAgent"
        >
          <SelectInput optionText={InsuranceAgentTitle} />
        </ReferenceInput>
        <TextInput label="policyNumber" source="policyNumber" />
        <NumberInput label="premiumAmount" source="premiumAmount" />
      </SimpleForm>
    </Create>
  );
};
