import { describe, it, expect } from "vitest";
import config from "../lib/index.js";

describe("Config object", () => {
  it("should export rules", () => {
    const configNodejs = config[config.length - 1];
    expect(Array.isArray(config)).toBeTruthy();
    expect(config.length).toBeGreaterThan(0);
    expect(configNodejs.name).toEqual("mlauffer-nodejs");
    expect(configNodejs.rules).toBeTypeOf("object");
    expect(config).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: "security/recommended" }),
        expect.objectContaining({ name: "sonarjs/recommended" }),
        expect.objectContaining({ name: "jsdoc/flat/recommended" }),
        expect.objectContaining({ name: "mlauffer-nodejs" }),
      ]),
    );
  });
});
