.PHONY: compile
compile:
	clojure -M:aot
	cp env.edn classes/
	clojure -M:pack mach.pack.alpha.aws-lambda -C:aot lambda.zip

.PHONY: create
# --handler name is underscored! (three-hourly -> three_hourly)
create:
	aws lambda --profile me create-function \
	--function-name clj-lambda-test \
	--handler core::handler \
	--runtime java11 \
	--memory 256 \
	--timeout 10 \
	--role arn:aws:iam::140131123595:role/lambda-s3-sqs \
	--zip-file fileb://./lambda.zip

.PHONY: update
update:
	aws lambda --profile me update-function-code \
	--function-name clj-lambda-test \
	--zip-file fileb://./lambda.zip
