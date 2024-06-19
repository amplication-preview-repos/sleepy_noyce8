import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ["insurancepolicy", "customer", "claim", "insuranceagent"],
    protoPath: [
      "src/insurancepolicy/insurancepolicy.proto",
      "src/customer/customer.proto",
      "src/claim/claim.proto",
      "src/insuranceagent/insuranceagent.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
