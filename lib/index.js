'use strict';

module.exports = {
  root: false,
  plugins: [
    'sonarjs'
  ],
  extends: [
    'eslint:recommended',
    'google',
    'plugin:anti-trojan-source/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:jsdoc/recommended'
  ],
  env: {
    node: true,
    es2020: true
  },
  rules: {
    'strict': ['error', 'global'],
    'no-console': 'error',
    'max-len': 0,
    'func-names': 0, // ['warn', 'as-needed'],
    'prefer-rest-params': 0,
    'valid-jsdoc': 0,
    'require-jsdoc': 0,
    'comma-dangle': ['error', 'never']
  }
};
