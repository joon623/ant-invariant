import { test, assert } from "vitest";
import { invariant } from "../src/invariant.ts";

test("should throw if condition is false", () => {
  const falsy: unknown[] = [0, "", null, undefined, false, NaN, +0, -0];

  falsy.forEach((value) => {
    assert.throws(
      () => invariant(value, "condition is false"),
      "condition is false",
    );
  });
});

test("should not throw if condition is true", () => {
  const truthy: unknown[] = [1, -1, "true", [], {}, "invariant", Symbol()];

  truthy.forEach((value) => {
    assert.doesNotThrow(
      () => invariant(value, "condition is true"),
      "condition is true",
    );
  });
});
