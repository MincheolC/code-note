build:
	$(MAKE) clean
	$(MAKE) aot
	$(MAKE) pack

clean:
	rm -rf classes target
	rm -f lambda.zip

aot:
	mkdir -p classes
	clojure -M:aot

pack:classes
	clojure -M:pack mach.pack.alpha.aws-lambda -C:aot lambda.zip
