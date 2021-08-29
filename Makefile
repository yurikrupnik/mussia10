run-one:
	npx nx run batman:serve

run-many:
	npx nx run-many --target=serve --projects=batman,batman-api --parallel=true
