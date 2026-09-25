import test from "node:test";
import assert from "node:assert/strict";
import calculateOrderTotal from "./calculateOrderTotal.js";

test("calculates the total for multiple cart items", () => {
  const items = [
    { price: 9.5, quantity: 2 },
    { price: 11.5, quantity: 1 },
  ];

  const results = calculateOrderTotal(items);

  assert.equal(results, 30.5);
});

test("returns zero for an empty cart", () => {
  const items = [];

  const results = calculateOrderTotal(items);

  assert.equal(results, 0);
});

test("calculates the total for a single item with quantity", () => {
  const items = [{ price: 9.5, quantity: 3 }];
  const results = calculateOrderTotal(items);

  assert.equal(results, 28.5);
});
