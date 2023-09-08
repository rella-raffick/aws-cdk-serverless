import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import {  Function as LambdaFunction, Code, Runtime } from "aws-cdk-lib/aws-lambda";
import { join } from "path";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";
import { ITable } from "aws-cdk-lib/aws-dynamodb";

interface LambdaStackProps extends StackProps{
  nomadTable: ITable
}

export class LambdaStack extends Stack {
  public readonly lambdaApiIntegration: LambdaIntegration;

  constructor(scope: Construct, id: string, props?: LambdaStackProps) {
    super(scope, id, props);

    const lambdaApi = new LambdaFunction(this, "KonnichiwaLambda", {
      runtime: Runtime.NODEJS_LATEST,
      handler: "hola.main",
      code: Code.fromAsset(join(__dirname, "..", "services")),
      environment:{
        TABLE_NAME: props.nomadTable.tableName
      }
    });

    this.lambdaApiIntegration = new LambdaIntegration(lambdaApi);
  }
}
