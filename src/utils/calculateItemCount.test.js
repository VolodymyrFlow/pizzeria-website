import test from "node:test";
import assert from "node:assert/strict";
import calculateItemCount from "./calculateItemCount.js";

test("return zero for an ampty card", () => {
  const items = [];
  const results = calculateItemCount(items);
  assert.equal(results, 0);
});

test("adds quantities across multiple cart items", () => {
  const items = [{ quantity: 2 }, { quantity: 1 }];
  const results = calculateItemCount(items);
  assert.equal(results, 3);
});
