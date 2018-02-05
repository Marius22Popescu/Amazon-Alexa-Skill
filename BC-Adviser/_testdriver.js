﻿/*
 * This is a utility file to help invoke and debug the lambda function. It is not included as part of the
 * bundle upload to Lambda.
 * 
 * Credentials:
 *  The AWS SDK for Node.js will look for credentials first in the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY and then 
 *  fall back to the shared credentials file. For further information about credentials read the AWS SDK for Node.js documentation
 *  http://docs.aws.amazon.com/AWSJavaScriptSDK/guide/node-configuring.html#Credentials_from_the_Shared_Credentials_File_____aws_credentials_
 * 
 */

// Set the region
process.env['AWS_REGION'] = 'us-west-2'

var fs = require('fs');
var index = require('./index');

// Load the sample event to be passed to Lambda. The _sampleEvent.json file can be modified to match
// what you want Lambda to process on.
var event = JSON.parse(fs.readFileSync('_sampleEvent.json', 'utf8').trim());

var context = {};
context.done = function () {
    console.log("Lambda Function Complete");
}
context.succeed= function () {
    console.log("Lambda Function Success");
}
context.fail = function () {
    console.log("Lambda Function Failure");
}

index.handler(event, context, function () {
    console.log("Done");
});