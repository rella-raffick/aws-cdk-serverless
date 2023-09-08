import { Stack, StackProps } from "aws-cdk-lib";
import { AttributeType, ITable, Table } from "aws-cdk-lib/aws-dynamodb";
import { Construct } from "constructs";


export class DataStack extends Stack {
    public readonly nomadTestTable: ITable

    constructor(scope: Construct, id: string, props?: StackProps){
        super(scope, id, props)

          this.nomadTestTable =  new Table(this, "nomadTestTable", {
             partitionKey: {
               name: id,
               type: AttributeType.STRING,
             },
             tableName: `nomad-test-table`,
           });
    }

 
}
