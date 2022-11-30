## Summary

This repository is introduction of some patterns OAS schema managements.

1. Separated open api files (This advantage is each files can be edited by stoplight studio all features even if multiple files. They are concatnated after edited by swagger-cli  can convert ref with escaped path. [~1 is slash alias in OAS](https://swagger.io/docs/specification/using-ref/) )

2. @nestjs/swagger only oas builder usage. Nestjs with @nestjs/swagger can generate open api specifications with schema validation by Typescript. This can be also used even if not concrete logic controller, so you can use openapi schema generator.

3. openapi-types

Build Open Api object by typescript and emit a file as yaml format.

## Specification create rule

### swagger-cli

1. Add endpoint path and path's file path to swagger main file in paths section. It needs escaping after `#paths/` string.
ex)
```yaml
paths:
  /api/users:
    $ref: "./paths/api/users/index.yml#/paths/~1api~1users"
```

2. (Optional) Add components name and the file path to swagger main file in paths section.
ex)
```yaml
components:
  schemas:
    User:
      $ref: "./components/schemas/user/user.yml"
```

2. Run `./bin/create-swagger-yaml.sh`. See create-swagger-yaml.sh if you want more detail.

### nestjs

1. `npx nest g module xxxx`
2. `npx nest g co api-example/action-name --flat --no-spec  && npx nest g cl api-example/dto/action-name --flat --no-spec `
3. Annotate dto class and controller with @nestjs/swagger decorators
4. Add api module to app.module.ts's imports
5. run `npx nest start`

### openapi-types

1. export typed object file with openapi-types type.
2. dump yaml

#### exmple

Run `pnpm run gen:openapi-types`.

## Mock Service

```shell
npx prism mock ${api yaml file path}
```
