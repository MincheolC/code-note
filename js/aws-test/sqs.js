const { SQSClient, SendMessageCommand, ReceiveMessageCommand, DeleteMessageCommand } = require ('@aws-sdk/client-sqs');

const REGION = "ap-northeast-2"
const sqsClient = new SQSClient({ region: REGION });
const queueURL = "https://sqs.ap-northeast-2.amazonaws.com/140131123595/test.fifo";


const sendMessage = async (msg) => {
    try {
        const params = {
            MessageDeduplicationId: "test",
            MessageGroupId: "test",
            MessageBody: msg,
            QueueUrl: queueURL,
        }
        const data = await sqsClient.send(new SendMessageCommand(params));
        console.log("Success, message sent. MessageID:", data.MessageId);
        return data; // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }
};

const receiveMessage = async () => {
    try {
        const params = {
            AttributeNames: ["SentTimestamp"],
            MaxNumberOfMessages: 10,
            MessageAttributeNames: ["All"],
            QueueUrl: queueURL,
            VisibilityTimeout: 20,
            WaitTimeSeconds: 0,
        };
        const data = await sqsClient.send(new ReceiveMessageCommand(params));
        
        if (data.Messages) {
            const deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: data.Messages[0].ReceiptHandle,
            };
            try {
            const data = await sqsClient.send(new DeleteMessageCommand(deleteParams));
            console.log("Message deleted", data);
            } catch (err) {
            console.log("Error", err);
            }
        } else {
            console.log("No messages to delete");
        }
        console.log(data)
        return data; // For unit tests.
    } catch (err) {
      console.log("Receive Error", err);
    }
};


// sendMessage("hello world");
// receiveMessage();