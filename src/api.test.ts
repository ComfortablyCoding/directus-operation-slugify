import { describe, it, expect } from "vitest";

import operation from "./api";

interface Options {
  value?: string;
  separator?: string;
  lowercase?: boolean;
  decamelize?: boolean;
  replacements?: Array<{ value: string; replacement: string }>;
}

const run = (options: Options): { slug: string } =>
  (operation.handler as (o: Options) => { slug: string })(options);

describe("slugify operation handler", () => {
  it("throws when no value is provided", () => {
    expect(() => run({})).toThrow("No value provided");
    expect(() => run({ value: "" })).toThrow("No value provided");
  });

  it("throws when the value contains an unresolved `undefined`", () => {
    expect(() => run({ value: "order undefined" })).toThrow("All values must be defined");
  });

  it("returns an object with a `slug` property", () => {
    const result = run({ value: "Hello World" });
    expect(result).toHaveProperty("slug");
    expect(typeof result.slug).toBe("string");
  });

  it("forwards a custom separator", () => {
    expect(run({ value: "hello world", separator: "_" }).slug).toBe("hello_world");
  });

  it("defaults lowercase to true and can be disabled", () => {
    expect(run({ value: "Hello" }).slug).toBe("hello");
    expect(run({ value: "Hello", lowercase: false }).slug).toBe("Hello");
  });

  it("defaults decamelize to true and can be disabled", () => {
    expect(run({ value: "helloWorld" }).slug).toBe("hello-world");
    expect(run({ value: "helloWorld", decamelize: false }).slug).toBe("helloworld");
  });

  it("preserves the default `&` -> `and` mapping when custom replacements are added", () => {
    const result = run({
      value: "cats & dogs @ home",
      replacements: [{ value: "@", replacement: "at" }],
    });
    expect(result.slug).toBe("cats-and-dogs-at-home");
  });

  it("lets a user replacement override the default `&` mapping", () => {
    const result = run({
      value: "cats & dogs",
      replacements: [{ value: "&", replacement: "plus" }],
    });
    expect(result.slug).toBe("cats-plus-dogs");
  });
});
