# Approaching SOLIDJS

I have heard speaking highly about this framework, so I am pretty curious about it and I would like to give it a try. \
So let's do it 😄😄. \
I will capture and write down some concepts you will surely find [`here`](https://www.solidjs.com/) explained way better but that's just for my studying aim obviously.

---
***Prerequisites:***
1. [`docker`](https://www.docker.com/): docker daemon for containerization purpose
2. [`kubectl`](https://kubernetes.io/docs/tasks/tools/): docker cli
3. [`minikube`](https://minikube.sigs.k8s.io/docs/): in order to apply against local [`kubernetes`](https://kubernetes.io/) environment
4. [`helm`](https://helm.sh/): template engine which enables us to dynamically interpolate value within k8s manifests and install against k8s cluster, relying under the hood on kubectl
5. [`yq`](https://github.com/mikefarah/yq): [`yaml`](https://en.wikipedia.org/wiki/YAML) parser

---

I have created only one `makefile` to perform operation across multiple folder (i.e. different apps) so it is possible to use always [`the same one`](./Makefile) just passing the ENV target, minikube in this case, along with APP which coincides with the application folder we wish to install against the cluster.

**Main makefile targets:** \
Chain and perform all the operation in order to install the declared app:
```bash
make all ENV=minikube APP=my-app-01
```

Clean up the environment (i.e. cluster stop and delete)
```bash
make clean-up ENV=minikube APP=my-app-01
```

**Sections:**

* [`Create my first app`](./my-app-01/README.md)
* [`Let's go a bit further with a second app`](./my-app-02/README.md)
* [`Looping and createEffect`](./my-app-03/README.md)
* [`Derived value`](./my-app-04/README.md)
* [`Flow controls`](./my-app-05/README.md)
* [`Switch`](./my-app-06/README.md)
* [`Error handling`](./my-app-07/README.md)
* [`Lifecycle functions`](./my-app-08/README.md)
* [`Event binding`](./my-app-09/README.md)
* [`Style in SolidJS`](./my-app-10/README.md)
* [`Spread Operator`](./my-app-11/README.md)
* [`Merging Props`](./my-app-12/README.md)
* [`Splitting Props`](./my-app-13/README.md)
* [`Children Props`](./my-app-14/README.md)
* [`Nested Reactivity`](./my-app-15/README.md)


