LAMBDA_FUNCTION_NAME=clj-lambda-test
LAMBDA_HANDLER=core::handler
LAMBDA_RUNTIME=java11
LAMBDA_MEMORY=512
LAMBDA_TIMEOUT=600
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
	$(MAKE) lambda-update

aot:
	mkdir -p classes
	clojure -M:aot

pack:classes
	clojure -M:pack mach.pack.alpha.aws-lambda -C:aot lambda.zip

lambda-create:lambda.zip
	aws lambda create-function \
	--function-name $(LAMBDA_FUNCTION_NAME) \
	--handler $(LAMBDA_HANDLER) \
	--runtime $(LAMBDA_RUNTIME) \
	--memory $(LAMBDA_MEMORY) \
	--timeout $(LAMBDA_TIMEOUT) \
	--role $(LAMBDA_ROLE) \
	--zip-file fileb://./lambda.zip \
	--no-cli-pager

lambda-update:lambda.zip
	aws lambda update-function-code \
	--function-name $(LAMBDA_FUNCTION_NAME) \
	--zip-file fileb://./lambda.zip \
	--no-cli-pager
	aws lambda update-function-configuration \
	--function-name $(LAMBDA_FUNCTION_NAME) \
	--handler $(LAMBDA_HANDLER) \
	--runtime $(LAMBDA_RUNTIME) \
	--memory $(LAMBDA_MEMORY) \
	--timeout $(LAMBDA_TIMEOUT) \
	--role $(LAMBDA_ROLE) \
	--no-cli-pager

lambda-delete:
	aws lambda delete-function
	--function-name $(LAMBDA_FUNCTION_NAME)
	--no-cli-pager
