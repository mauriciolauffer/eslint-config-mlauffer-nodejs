import { describe, it, expect } from "vitest";
import config from "../lib/index.js";

describe("Config object", () => {
  it("should export rules", () => {
    expect(Array.isArray(config)).toBeTruthy();
    expect(config.length).toEqual(5);
    expect(config).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.stringMatching(/security\/recommended$/),
        }),
        expect.objectContaining({
          name: expect.stringMatching(/sonarjs\/recommended$/),
        }),
        expect.objectContaining({
          name: expect.stringMatching(/jsdoc\/flat\/recommended$/),
        }),
        expect.objectContaining({ name: "mlauffer-nodejs" }),
      ]),
    );
  });
});
