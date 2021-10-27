module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  rules: {
    'no-var': 'error',
    'prefer-template': 'warn',
    radix: 'warn',
    'no-console': 'off',
  },
};
