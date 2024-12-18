import { describe, it, expect } from "vitest";
import { RuleTester } from "eslint";
import config from "../lib/index.js";

const tester = new RuleTester();
let rule;
let valid;
let invalid;

/* const configSecurity = config[1];
rule = configSecurity.plugins["security"].rules["detect-child-process"];
valid = [
  { code: "child_process.exec('ls');" },
  { code: "import { spawn } from 'child_process'; spawn(str);" },
];
invalid = [
  {
    code: "require('child_process');",
    errors: [{ message: 'Found require("child_process")' }],
  },
  {
    code: "import child from 'child_process'; child.exec(com);",
    errors: [
      { message: "Found child_process.exec() with non Literal first argument" },
    ],
  },
];
tester.run("security/recommended/detect-child-process", rule, {
  valid,
  invalid,
});
expect(configSecurity.name).toEqual("security/recommended");

const configSonarjs = config[2];
rule = configSonarjs.plugins["sonarjs"].rules["no-empty-collection"];
valid = [
  {
    code: "var a = [1, 2, 3]; a.includes(1);",
  },
];
invalid = [
  {
    code: "var a = []; a.includes(1);",
    errors: [
      { message: `Review this usage of "a" as it can only be empty here.` },
    ],
  },
];
tester.run("sonarjs/recommended/no-empty-collection", rule, { valid, invalid });
expect(configSonarjs.name).toEqual("sonarjs/recommended"); */

const configJsdom = config[3];
rule = configJsdom.plugins["jsdoc"].rules["require-returns"];
valid = [
  {
    code: `
/**
 * @returns {number}
 **/
function MyClass() { return 123; }`,
  },
];
invalid = [
  {
    code: `
/**
 *
 **/
function MyClass() { return 123; }`,
    errors: [{ message: "Missing JSDoc @returns declaration." }],
  },
];
tester.run("jsdoc/flat/recommended/require-jsdoc", rule, { valid, invalid });
expect(configJsdom.name).toEqual("jsdoc/flat/recommended");

describe("ESLint config", () => {
  it("should be eslint/recommended", () => {
    const configEslint = config[0];
    rule = configEslint.rules["no-debugger"];
    expect(configEslint.name).toEqual(undefined);
    expect(rule).toEqual("error");
  });

  it("it should be mlauffer-nodejs", () => {
    const configNodejs = config[4];
    rule = configNodejs.rules["no-console"];
    expect(configNodejs.name).toEqual("mlauffer-nodejs");
    expect(rule).toEqual("error");
  });
});
