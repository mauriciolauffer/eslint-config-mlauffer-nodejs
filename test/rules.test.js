import { describe, it, expect } from "vitest";
import config from "../lib/index.js";
import { RuleTester } from "eslint";

const tester = new RuleTester();

describe("Execute rules", () => {
  it("should execute rule security/recommended", () => {
    const configDOM = config[1];
    const rule = configDOM.plugins['security'].rules['detect-child-process'];
    const valid = [
      { code: "child_process.exec('ls')" },
      { code: "import { spawn } from 'child_process'; spawn(str);" }
    ];
    const invalid = [
      {
        code: "require('child_process')",
        errors: [{ message: 'Found require("child_process")' }],
      },
      {
        code: "import child from 'child_process'; child.exec(com)",
      errors: [{ message: 'Found child_process.exec() with non Literal first argument' }],
      }
    ];
    tester.run("no-unsanitized/DOM/property", rule, {valid, invalid});
    expect(Array.isArray(config)).toBeTruthy();
  });
});
