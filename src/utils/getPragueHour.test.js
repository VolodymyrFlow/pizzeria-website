import test from "node:test";
import assert from "node:assert/strict";
import getPragueHour from "./getPragueHour.js";

test("returns Prague hour in winter", () => {
  const date = new Date("2026-01-15T08:00:00Z");

  const result = getPragueHour(date);

  assert.equal(result, 9);
});

test("returns Prague hour in summer", () => {
  const date = new Date("2026-07-15T08:00:00Z");

  const result = getPragueHour(date);

  assert.equal(result, 10);
});

test("returns zero at Prague midnight", () => {
  const date = new Date("2026-01-15T23:00:00Z");

  const result = getPragueHour(date);

  assert.equal(result, 0);
});
