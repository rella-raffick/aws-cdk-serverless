import { Stack } from "aws-cdk-lib";
import { RestApi } from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { ApiStackProps } from "../interfaces/stack.bean";


export class ApiGatewayStack extends Stack {
  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    const api = new RestApi(this, "nomadApi");
    const apiResource = api.root.addResource("nomadApi");
    apiResource.addMethod("GET", props.nomadLambdaIntegration);
  }
}
