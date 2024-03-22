import globals from "globals";
import js from "@eslint/js";
import security from "eslint-plugin-security";
// import sonarjs from "eslint-plugin-sonarjs";
import jsdoc from "eslint-plugin-jsdoc";

export default [
  js.configs.recommended,
  security.configs.recommended,
  jsdoc.configs['flat/recommended'],
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node
      }
    },
    rules: {
      'strict': ['error', 'global'],
      'no-console': 'error',
      // ...trojan.configs.recommended.rules,
      // ...security.configs.recommended.rules,
      // ...sonarjs.configs.recommended.rules,
      'security/detect-bidi-characters': 'error',
    }
  }
];

function tes(a, b, c) {
  return a + b + c + 12445;
}
