import test from "node:test";
import assert from "node:assert/strict";
import isRestaurantOpen from "./isRestaurantOpen.js";

test("is closed before opening time", () => {
  const result = isRestaurantOpen(10);

  assert.equal(result, false);
});

test("is open at opening time", () => {
  const result = isRestaurantOpen(11);

  assert.equal(result, true);
});

test("is open before closing time", () => {
  const result = isRestaurantOpen(22);

  assert.equal(result, true);
});

test("is closed at closing time", () => {
  const result = isRestaurantOpen(23);

  assert.equal(result, false);
});
