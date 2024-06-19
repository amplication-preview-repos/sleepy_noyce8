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
import {
  IsNumber,
  IsOptional,
  IsString,
  IsDate,
  ValidateNested,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { InsurancePolicyWhereUniqueInput } from "../../insurancePolicy/base/InsurancePolicyWhereUniqueInput";
import { EnumClaimStatus } from "./EnumClaimStatus";

@InputType()
class ClaimCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amountClaimed?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  claimNumber?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfClaim?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => InsurancePolicyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InsurancePolicyWhereUniqueInput)
  @IsOptional()
  @Field(() => InsurancePolicyWhereUniqueInput, {
    nullable: true,
  })
  insurancePolicy?: InsurancePolicyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumClaimStatus,
  })
  @IsEnum(EnumClaimStatus)
  @IsOptional()
  @Field(() => EnumClaimStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { ClaimCreateInput as ClaimCreateInput };
