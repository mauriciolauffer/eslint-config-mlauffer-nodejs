'use strict';

module.exports = {
  root: false,
  plugins: [
    'security',
    'sonarjs',
  ],
  extends: [
    'eslint:recommended',
    'google',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
  ],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'strict': 2,
    'no-console': 2,
    'max-len': 0,
    'func-names': 0,
    'valid-jsdoc': 0,
    'require-jsdoc': 0,
  },
};
