/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InsuranceAgentWhereInput } from "./InsuranceAgentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class InsuranceAgentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => InsuranceAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceAgentWhereInput)
  @IsOptional()
  @Field(() => InsuranceAgentWhereInput, {
    nullable: true,
  })
  every?: InsuranceAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceAgentWhereInput)
  @IsOptional()
  @Field(() => InsuranceAgentWhereInput, {
    nullable: true,
  })
  some?: InsuranceAgentWhereInput;

  @ApiProperty({
    required: false,
    type: () => InsuranceAgentWhereInput,
  })
  @ValidateNested()
  @Type(() => InsuranceAgentWhereInput)
  @IsOptional()
  @Field(() => InsuranceAgentWhereInput, {
    nullable: true,
  })
  none?: InsuranceAgentWhereInput;
}
export { InsuranceAgentListRelationFilter as InsuranceAgentListRelationFilter };
