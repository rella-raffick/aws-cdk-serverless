import { StackProps } from "aws-cdk-lib";
import { LambdaIntegration } from "aws-cdk-lib/aws-apigateway";

export interface ApiStackProps extends StackProps{
    nomadLambdaIntegration: LambdaIntegration
}