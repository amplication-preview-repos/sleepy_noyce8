/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { InsurancePolicyWhereUniqueInput } from "../../insurancePolicy/base/InsurancePolicyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class InsurancePolicyUpdateManyWithoutInsuranceAgentsInput {
  @Field(() => [InsurancePolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InsurancePolicyWhereUniqueInput],
  })
  connect?: Array<InsurancePolicyWhereUniqueInput>;

  @Field(() => [InsurancePolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InsurancePolicyWhereUniqueInput],
  })
  disconnect?: Array<InsurancePolicyWhereUniqueInput>;

  @Field(() => [InsurancePolicyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [InsurancePolicyWhereUniqueInput],
  })
  set?: Array<InsurancePolicyWhereUniqueInput>;
}

export { InsurancePolicyUpdateManyWithoutInsuranceAgentsInput as InsurancePolicyUpdateManyWithoutInsuranceAgentsInput };
