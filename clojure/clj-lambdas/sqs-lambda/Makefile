LAMBDA_FUNCTION_NAME=clj-lambda-test
LAMBDA_HANDLER=core::handler
LAMBDA_RUNTIME=java11
LAMBDA_MEMORY=512
LAMBDA_TIMEOUT=15
LAMBDA_ROLE=arn:aws:iam::140131123595:role/lambda-s3-sqs

build:
	$(MAKE) clean
	$(MAKE) aot
	$(MAKE) pack

clean:
	rm -rf classes
	rm -f lambda.zip

deploy:
	$(MAKE) build
	$(MAKE) update

aot:
	mkdir -p classes
	clojure -M:aot

pack:classes
	clojure -M:pack mach.pack.alpha.aws-lambda -C:aot lambda.zip

create:lambda.zip
	aws lambda --profile me create-function \
	--function-name $(LAMBDA_FUNCTION_NAME) \
	--handler $(LAMBDA_HANDLER) \
	--runtime $(LAMBDA_RUNTIME) \
	--memory $(LAMBDA_MEMORY) \
	--timeout $(LAMBDA_TIMEOUT) \
	--role $(LAMBDA_ROLE) \
	--zip-file fileb://./lambda.zip \
	--no-cli-pager

update:lambda.zip
	aws lambda --profile me update-function-code \
	--function-name $(LAMBDA_FUNCTION_NAME) \
	--zip-file fileb://./lambda.zip \
	--no-cli-pager
	aws lambda --profile me update-function-configuration \
	--function-name $(LAMBDA_FUNCTION_NAME) \
	--handler $(LAMBDA_HANDLER) \
	--runtime $(LAMBDA_RUNTIME) \
	--memory $(LAMBDA_MEMORY) \
	--timeout $(LAMBDA_TIMEOUT) \
	--role $(LAMBDA_ROLE) \
	--no-cli-pager

delete:
	aws lambda --profile me delete-function
	--function-name $(LAMBDA_FUNCTION_NAME)
	--no-cli-pager


# For Test
QUEUE_URL=https://sqs.ap-northeast-2.amazonaws.com/140131123595/test
MESSAGE_BODY='{"date-str":"20210721","specie-code":"061401"}'

send-message:
	aws sqs --profile me send-message \
	--queue-url $(QUEUE_URL) \
	--message-body $(MESSAGE_BODY)
	--no-cli-pager