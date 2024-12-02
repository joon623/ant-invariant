import { test, expectTypeOf, expect } from "vitest";
import { invariant } from "../src/invariant.ts";

test("should narrow type when condition is true", () => {
  const value: unknown = "truthy";

  invariant(typeof value === "string", "value is a string");

  expectTypeOf(value).toBeString();

  expect(value.toUpperCase()).toBe("TRUTHY");
});
