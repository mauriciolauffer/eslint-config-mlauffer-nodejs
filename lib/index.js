import globals from "globals";
import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import jsdoc from "eslint-plugin-jsdoc";

export default defineConfig([
  {
    name: "mlauffer-nodejs",
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.node,
      },
    },
    extends: [
      js.configs.recommended,
      security.configs.recommended,
      sonarjs.configs.recommended,
      jsdoc.configs["flat/recommended"],
    ],
    rules: {
      strict: ["error", "global"],
      "no-console": "error",
      "security/detect-bidi-characters": "error",
    },
  },
]);
