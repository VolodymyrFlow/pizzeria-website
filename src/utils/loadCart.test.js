import test from "node:test";
import assert from "node:assert/strict";
import loadCart from "./loadCart.js";

function withStorage(value, run) {
  const original = globalThis.localStorage;

  globalThis.localStorage = {
    getItem: () => value,
  };

  try {
    run();
  } finally {
    globalThis.localStorage = original;
  }
}

test("returns an empty array when nothing is saved", () => {
  withStorage(null, () => {
    assert.deepEqual(loadCart(), []);
  });
});

test("loads and parses saved cart items", () => {
  const saved = JSON.stringify([
    { name: "Diavola", price: 11.5, quantity: 2 },
  ]);

  withStorage(saved, () => {
    assert.deepEqual(loadCart(), [
      { name: "Diavola", price: 11.5, quantity: 2 },
    ]);
  });
});

test("converts old string prices to numbers", () => {
  const saved = JSON.stringify([
    { name: "Margherita", price: "€9.50", quantity: 1 },
  ]);

  withStorage(saved, () => {
    assert.deepEqual(loadCart(), [
      { name: "Margherita", price: 9.5, quantity: 1 },
    ]);
  });
});

test("returns an empty array for corrupted data", () => {
  withStorage("not-json{{{", () => {
    assert.deepEqual(loadCart(), []);
  });
});
