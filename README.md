# @dopamine-code/eslint-config

## How to use it

Add an .eslintrc file with the following:

```json
{
  "extends": "@dopamine-code"
}
```

Extend more specific configs like so:

```json
{
  "extends": [
   "@dopamine-code/eslint-config/react"
  ]
}
```

Prettier is also integrated in this config so add a .prettierrc file as well:

```json
{
  "singleQuote": true,
  "trailingComma": "all"
}
```

You can add your own custom rules for edge cases in your project.

## Available configurations

This library has the following configurations available:

| Name                                           | Description                                                  |
| ---                                            | ---                                                          |
| `@dopamine-code`                                | Base config for Node projects that use plain JavaScript      |
| `@dopamine-code/eslint-config/react`            | Frontend config for React projects that use Babel            |
| `@dopamine-code/eslint-config/typescript`       | Base config for Node projects that use TypeScript            |
| `@dopamine-code/eslint-config/react-typescript` | Frontend config for React projects that use TypeScript       |

All specific configs extend from the base config, so only extending 1
config suffices.

## Note on Prettier integration

Using the eslint-plugin-prettier adds Prettier as a rule to ESLint, delegating
all formatting concerns to Prettier and code style to ESLint. This means that
running `eslint --fix` will also run Prettier. Therefore it is no longer
necessary to have `prettier-eslint` installed in your project. 
