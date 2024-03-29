run-one:
	npx nx run batman:serve

run-many:
	npx nx run-many --target=${target} --projects=${projects} --parallel=true


ra:
	npx nx run-many --target=${target} --parallel --all
raa:
	npx nx affected --target=${target} --parallel --all


gcp-run:
	#gc_image=eu.gcr.io/mussia8/${name}
	docker build  . --force-rm
