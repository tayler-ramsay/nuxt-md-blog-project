.DEFAULT_GOAL := help

BUILD_DATE := $(shell date -u +'%Y-%m-%dT%H:%M:%SZ')
GIT_REV := $(shell git rev-parse HEAD)
GIT_REV_SHORT := $(shell git rev-parse --short=12 HEAD)
RELEASE_VERSION := $(shell ./bin/current-version.sh)
ARTIFACT_NAME := "versatile-website-backend-$(RELEASE_VERSION).tgz"

LOG = @echo $$(tput setaf 6)[web/$@]$$(tput sgr0) $(1)


# --- Public Targets -----------------------------------------------------------

.PHONY: build
build:  ## Build the project
	$(call LOG,"Building target/$(ARTIFACT_NAME)")

	@./bin/npm install  && \
		./bin/npx gulp --releaseVersion "$(RELEASE_VERSION)" && \
		mkdir -p target && \
		tar -C dist -czf target/"$(ARTIFACT_NAME)" .


.PHONY: clean
clean:  ## Clean the build output directory
	$(call LOG,"Cleaning build output directory...")
	@rm -rf dist; rm -rf target; echo "[DONE]"


.PHONY: help
help:  ## Print the Makefile's "help" message
	@grep -E '^[\.a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort -d | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
