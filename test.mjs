import assert from "node:assert/strict";
import {readFileSync} from "node:fs";
import {analyze} from "./analyze.mjs";
const sample = JSON.parse(readFileSync(new URL("./fixture.json", import.meta.url)));
assert.deepEqual(analyze(sample)["count"], 1);
console.log("Fixture passed");
const comparison = {
  "syntheticCount": 1000000,
  "attackIndex": -1
};
assert.deepEqual(analyze(comparison)["count"], 0);
console.log("Comparison fixture passed");
