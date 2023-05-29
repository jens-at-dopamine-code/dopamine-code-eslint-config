module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  rules: {
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn'],
    'no-param-reassign': 'warn',
    'no-unused-expressions': 'error',
    quotes: [
      'error',
      'single',
      { allowTemplateLiterals: false, avoidEscape: true },
    ],
  },
};
