const { S3Client, ListBucketsCommand } = require("@aws-sdk/client-s3");

const REGION = "ap-northeast-2"

const s3Client = new S3Client({ region: REGION }); // Helper function that creates Amazon S3 service client module.

const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();