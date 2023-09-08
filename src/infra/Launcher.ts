import { App } from "aws-cdk-lib";
import { DataStack } from "../stacks/datastack";
import * as cdk from "aws-cdk-lib";
import { LambdaStack } from "../stacks/lambdastack";
import { ApiGatewayStack } from "../stacks/apigatewaystack";


const cdkApplication = new App();
const dataStack = new DataStack(cdkApplication, "DataStack", {
  synthesizer: new cdk.DefaultStackSynthesizer({
    qualifier: "nomadtest14",
  }),
});

const lambdaStack = new LambdaStack(cdkApplication, "LambdaStack", {
  nomadTable: dataStack.nomadTestTable
});

new ApiGatewayStack(cdkApplication, "ApiGatewayStack", {
  nomadLambdaIntegration: lambdaStack.lambdaApiIntegration,
});
