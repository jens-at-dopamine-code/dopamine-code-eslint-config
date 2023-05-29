module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', './index', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/forbid-prop-types': [
      'error',
      {
        checkChildContextTypes: true,
        checkContextTypes: true,
        forbid: ['any', 'object'],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-bind': [
      'error',
      {
        allowBind: true,
        ignoreRefs: true,
      },
    ],
    'react/no-danger': 'warn',
    'react/no-multi-comp': 'off',
    'react/prefer-stateless-function': ['error'],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'function-expression',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
