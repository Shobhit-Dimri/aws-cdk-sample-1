#!/usr/bin/env node
import 'source-map-support/register';
// import * as cdk from '@aws-cdk/core';
import * as cdk from 'aws-cdk-lib';
// import { AwsCdkSample1Stack } from '../lib/aws-cdk-sample-1-stack';
import { S3BucketStack } from '../lib/s3-bucket-stack';
import { LambdaStack } from '../lib/lambda-stack';

const app = new cdk.App();
// new AwsCdkSample1Stack(app, 'AwsCdkSample1Stack', {
  /* If you don't specify 'env', this stack will be environment-agnostic.
   * Account/Region-dependent features and context lookups will not work,
   * but a single synthesized template can be deployed anywhere. */

  /* Uncomment the next line to specialize this stack for the AWS Account
   * and Region that are implied by the current CLI configuration. */
  // env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },

  /* Uncomment the next line if you know exactly what Account and Region you
   * want to deploy the stack to. */
  // env: { account: '483716592891', region: 'us-east-1' },

  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
// });

// Deploying basic Lambda function
const lambda_stack = new LambdaStack(app, 'anarchyLambdaStack');

// Creating an S3 bucket stack
const s3_bucket_stack = new S3BucketStack(app, 'anarchyS3Stack',{
  lambdaFunction: lambda_stack.lambdaFunction
});

// Re-using assets
const bucket = s3_bucket_stack.bucket;