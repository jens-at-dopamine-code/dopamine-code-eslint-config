module.exports = {
  extends: ['./react', './typescript'],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        tsx: 'never',
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
  },
};
