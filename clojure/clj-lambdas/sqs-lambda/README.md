## 소스 파일 패캐징

```sh
clojure -Sdeps '{:deps {pack/pack.alpha {:git/url "https://github.com/juxt/pack.alpha.git" :sha "2769a6224bfb938e777906ea311b3daf7d2220f5"}}}' -m mach.pack.alpha.skinny --no-libs --project-path my-cool-lib.jar
mkdir classes
```
`deps.edn` compile target 수정

```sh
clojure -M:aot
clojure -M:pack mach.pack.alpha.aws-lambda -C:aot lambda.zip
```

## AWS 배포

```sh
$ aws lambda --profile me create-function \
--function-name clj-lambda-test \
--handler core::handler \
--runtime java11 \
--memory 256 \
--timeout 10 \
--role arn:aws:iam::140131123595:role/lambda-s3-sqs \
--zip-file fileb://./lambda.zip
```

## SQS Message 생성
```json
{"date-str":"20210710","specie-code":"061401"}
```
```
{"Records" [{"messageId" "5032c36e-5a8a-4ba3-a96b-056366cda510", "receiptHandle" "AQEB+FlrXKDk2DnIK92M1CvYgc7TVBPuWwQPCGQdKc6Rky8DTGhOTDxpn2ScMihhmkwggdFoKEEt4+tW9DISw5LebNDGoqT94ltZ3R7/Z/eG9iV+YyUmFPIwR9lyXQTBhpT2fI+sVnAv+sk3mi/SFTKNLGDAiaBqjQFvh9mTSKqUTnAPEfiQ9I/hXwrmBCqqoIPwYe6go1UnKMCvKBnaHTjs8cyKH6dXHoTNCdFN+p/EdH9Ap9Hhh2lahN5DTvhI+G9BRr8kr9clq/CNlFfAFjrImxsFy1aL0bob+ojf5UIH6jU=", "body" "{\"date-str\":\"20210710\", \"specie-code\":\"061401\"}", "attributes" {"ApproximateReceiveCount" "1", "SentTimestamp" "1627349863885", "SequenceNumber" "18863345638864111616", "MessageGroupId" "20210710", "SenderId" "140131123595", "MessageDeduplicationId" "20210710", "ApproximateFirstReceiveTimestamp" "1627349863885"}, "messageAttributes" {}, "md5OfBody" "f9498e4f7bf32044d39d5d26735df16a", "eventSource" "aws:sqs", "eventSourceARN" "arn:aws:sqs:ap-northeast-2:140131123595:test.fifo", "awsRegion" "ap-northeast-2"}]}
```