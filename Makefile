YQ:=$(shell which yq)
JQ:=$(shell which jq)
KUBECTL:=$(shell which kubectl)
DOCKER:=$(shell which docker)
MINIKUBE:=$(shell which minikube)
HELM:=$(shell which helm)

CHART_PATH:=$(APP)/deploy/$(APP)-chart
VALUES_FILE:="${CHART_PATH}/values.yaml"
HELM_RELEASE_NAME=$(shell ${YQ} e '.app.helmReleaseName' ${VALUES_FILE})
BASE_IMAGE:=$(shell ${YQ} e '.app.baseImage' ${VALUES_FILE})
NAMESPACE:=$(shell ${YQ} e '.app.namespaces.${ENV}' ${VALUES_FILE})
APP_NAME:=$(shell ${YQ} e '.app.name' ${VALUES_FILE})
VERSION:=$(shell ${YQ} e '.app.version' ${VALUES_FILE})
IMAGE_NAME_TAG:=$(APP_NAME):$(VERSION)
NAMESPACE:=$(shell ${YQ} e '.app.namespaces.${ENV}' ${VALUES_FILE})
EXTENAL_PORT:=$(shell ${YQ} e '.app.service.ports[].port' ${VALUES_FILE})
INTERNAL_PORT:=$(shell ${YQ} e '.app.service.ports[].targetPort' ${VALUES_FILE})
ARTIFACT_REGISTRY:=$(shell ${YQ} e '.app.registryUrls.${ENV}' ${VALUES_FILE})
FULLY_QUALIFIED_IMAGE_URL:=$(ARTIFACT_REGISTRY)$(IMAGE_NAME_TAG)

params-guard-%:
	@if [ "${${*}}" = "" ]; then \
			echo "Environment variable $* not set"; \
			exit 1; \
	fi

wait_for_resources: check_compulsory_params
	$(KUBECTL) wait \
	--for=condition=Ready \
	--timeout=300s \
	pods --all \
	--namespace $(NAMESPACE)

check_compulsory_params: params-guard-ENV params-guard-APP

minikube-start: check_compulsory_params
	$(MINIKUBE) start

create-namespace: check_compulsory_params
	$(KUBECTL) create namespace $(NAMESPACE) --dry-run=client -o yaml | $(KUBECTL) apply -f -

delete-namespace: check_compulsory_params
	$(KUBECTL) delete namespace $(NAMESPACE)

app_name: check_compulsory_params
	echo $(APP_NAME)

version: check_compulsory_params
	echo $(VERSION)

print_mk_var: check_compulsory_params
	@echo "YQ: [$(YQ)]"
	@echo "JQ: [$(JQ)]"
	@echo "KUBECTL: [$(KUBECTL)]"
	@echo "HELM: [$(HELM)]"
	@echo "DOCKER: [$(DOCKER)]"
	@echo "MINIKUBE: [$(MINIKUBE)]"
	@echo "ENV: [$(ENV)]"
	@echo "CHART_PATH: [$(CHART_PATH)]"
	@echo "VALUES_FILE: [$(VALUES_FILE)]"
	@echo "HELM_RELEASE_NAME: [$(HELM_RELEASE_NAME)]"
	@echo "BASE_IMAGE: [$(BASE_IMAGE)]"
	@echo "NAMESPACE: [$(NAMESPACE)]"
	@echo "APP_NAME: [$(APP_NAME)]"
	@echo "VERSION: [$(VERSION)]"
	@echo "IMAGE_NAME_TAG: [$(IMAGE_NAME_TAG)]"
	@echo "EXTENAL_PORT: [$(EXTENAL_PORT)]"
	@echo "INTERNAL_PORT: [$(INTERNAL_PORT)]"
	@echo "ARTIFACT_REGISTRY: [$(ARTIFACT_REGISTRY)]"
	@echo "FULLY_QUALIFIED_IMAGE_URL: [$(FULLY_QUALIFIED_IMAGE_URL)]"

build: check_compulsory_params
	$(DOCKER) build \
	--build-arg BASE_IMAGE=$(BASE_IMAGE) \
	-t $(IMAGE_NAME_TAG) \
	--pull \
	--no-cache \
	-f $(APP)/Dockerfile ./$(APP)

run: check_compulsory_params
	$(DOCKER) run \
	-p $(EXTENAL_PORT):$(INTERNAL_PORT) \
	-d $(IMAGE_NAME_TAG) 

tag: check_compulsory_params 
	$(DOCKER) tag $(IMAGE_NAME_TAG) $(FULLY_QUALIFIED_IMAGE_URL)

push: check_compulsory_params
	$(DOCKER) push $(FULLY_QUALIFIED_IMAGE_URL)

load: check_compulsory_params
	$(MINIKUBE) image load $(FULLY_QUALIFIED_IMAGE_URL)

template: check_compulsory_params print_mk_var
	$(HELM) template \
	--debug \
	-n $(NAMESPACE) \
	--set "env=$(ENV)" \
	-f $(VALUES_FILE) \
	$(HELM_RELEASE_NAME) \
	$(CHART_PATH)

apply: check_compulsory_params print_mk_var
	$(HELM) upgrade \
	--debug \
	--install \
	--namespace $(NAMESPACE) \
	--set "env=$(ENV)" \
	-f $(VALUES_FILE) \
	$(HELM_RELEASE_NAME) \
	$(CHART_PATH)
	$(MAKE) wait_for_resources

create-port-forward:
	$(KUBECTL) port-forward $(APP_NAME)-pod $(EXTENAL_PORT):$(EXTENAL_PORT) &

delete-port-forward:
	ps aux | grep -i kubectl | grep -v grep | awk {'print $2'} | xargs kill

	$(KUBECTL) \
	port-forward \
	--namespace $(NAMESPACE) \
	deploy/$(APP_NAME)-deployment \
	$(EXTENAL_PORT):$(EXTENAL_PORT) &

destroy: check_compulsory_params print_mk_var
	$(HELM) uninstall \
	--namespace $(NAMESPACE) \
	$(HELM_RELEASE_NAME) \
	--wait \
	--debug

all: check_compulsory_params minikube-start create-namespace build load apply port-forward

minikube-stop: check_compulsory_params
	$(MINIKUBE) stop

minikube-delete: check_compulsory_params
	$(MINIKUBE) delete

clean-up: delete-port-forward minikube-stop minikube-delete
