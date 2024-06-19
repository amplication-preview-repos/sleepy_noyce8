/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { CustomerService } from "../customer.service";
import { CustomerCreateInput } from "./CustomerCreateInput";
import { CustomerWhereInput } from "./CustomerWhereInput";
import { CustomerWhereUniqueInput } from "./CustomerWhereUniqueInput";
import { CustomerFindManyArgs } from "./CustomerFindManyArgs";
import { CustomerUpdateInput } from "./CustomerUpdateInput";
import { Customer } from "./Customer";
import { InsurancePolicyFindManyArgs } from "../../insurancePolicy/base/InsurancePolicyFindManyArgs";
import { InsurancePolicy } from "../../insurancePolicy/base/InsurancePolicy";
import { InsurancePolicyWhereUniqueInput } from "../../insurancePolicy/base/InsurancePolicyWhereUniqueInput";

export class CustomerGrpcControllerBase {
  constructor(protected readonly service: CustomerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Customer })
  @GrpcMethod("CustomerService", "createCustomer")
  async createCustomer(
    @common.Body() data: CustomerCreateInput
  ): Promise<Customer> {
    return await this.service.createCustomer({
      data: data,
      select: {
        address: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Customer] })
  @ApiNestedQuery(CustomerFindManyArgs)
  @GrpcMethod("CustomerService", "customers")
  async customers(@common.Req() request: Request): Promise<Customer[]> {
    const args = plainToClass(CustomerFindManyArgs, request.query);
    return this.service.customers({
      ...args,
      select: {
        address: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CustomerService", "customer")
  async customer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    const result = await this.service.customer({
      where: params,
      select: {
        address: true,
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CustomerService", "updateCustomer")
  async updateCustomer(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() data: CustomerUpdateInput
  ): Promise<Customer | null> {
    try {
      return await this.service.updateCustomer({
        where: params,
        data: data,
        select: {
          address: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Customer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CustomerService", "deleteCustomer")
  async deleteCustomer(
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<Customer | null> {
    try {
      return await this.service.deleteCustomer({
        where: params,
        select: {
          address: true,
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/insurancePolicies")
  @ApiNestedQuery(InsurancePolicyFindManyArgs)
  @GrpcMethod("CustomerService", "findManyInsurancePolicies")
  async findManyInsurancePolicies(
    @common.Req() request: Request,
    @common.Param() params: CustomerWhereUniqueInput
  ): Promise<InsurancePolicy[]> {
    const query = plainToClass(InsurancePolicyFindManyArgs, request.query);
    const results = await this.service.findInsurancePolicies(params.id, {
      ...query,
      select: {
        coverageAmount: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        effectiveDate: true,
        expiryDate: true,
        id: true,

        insuranceAgent: {
          select: {
            id: true,
          },
        },

        policyNumber: true,
        premiumAmount: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/insurancePolicies")
  @GrpcMethod("CustomerService", "connectInsurancePolicies")
  async connectInsurancePolicies(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: InsurancePolicyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      insurancePolicies: {
        connect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/insurancePolicies")
  @GrpcMethod("CustomerService", "updateInsurancePolicies")
  async updateInsurancePolicies(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: InsurancePolicyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      insurancePolicies: {
        set: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/insurancePolicies")
  @GrpcMethod("CustomerService", "disconnectInsurancePolicies")
  async disconnectInsurancePolicies(
    @common.Param() params: CustomerWhereUniqueInput,
    @common.Body() body: InsurancePolicyWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      insurancePolicies: {
        disconnect: body,
      },
    };
    await this.service.updateCustomer({
      where: params,
      data,
      select: { id: true },
    });
  }
}
