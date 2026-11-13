import assert from "node:assert/strict";
import test from "node:test";
import { OFFERINGS } from "./data/offerings.ts";
import { calculateFees, formatRand } from "./feeCalculator.ts";

const byId = (id) => OFFERINGS.find((item) => item.id === id);
const gamerPass = byId("ultimate-gamer-pass");
const vipPass = byId("vip-gaming-experience");
const esports = byId("esports-training");
const birthday = byId("birthday-party");
const vr = byId("virtual-reality");
const racing = byId("racing-simulator");

test("no selections total R0", () => {
  assert.deepEqual(calculateFees([]), {
    bookingCount: 0,
    subtotalRand: 0,
    discountPercent: 0,
    discountRand: 0,
    totalRand: 0,
  });
});

test("one R1,500 offering totals R1,500", () => {
  assert.equal(calculateFees([gamerPass]).totalRand, 1500);
});

test("two R1,500 offerings receive a 5% discount", () => {
  assert.equal(calculateFees([gamerPass, vipPass]).totalRand, 2850);
});

test("three R1,500 offerings receive a 10% discount", () => {
  assert.equal(calculateFees([gamerPass, vipPass, esports]).totalRand, 4050);
});

test("four R1,500 offerings receive a 15% discount", () => {
  assert.equal(
    calculateFees([gamerPass, vipPass, esports, birthday]).totalRand,
    5100,
  );
});

test("one R1,500 and two R750 experiences total R2,700", () => {
  assert.equal(calculateFees([gamerPass, vr, racing]).totalRand, 2700);
});

test("one R750 experience totals R750", () => {
  assert.equal(calculateFees([vr]).totalRand, 750);
});

test("duplicate offering IDs are counted once", () => {
  assert.deepEqual(calculateFees([gamerPass, gamerPass]), {
    bookingCount: 1,
    subtotalRand: 1500,
    discountPercent: 0,
    discountRand: 0,
    totalRand: 1500,
  });
});

test("formats Rand values as R1,500, R750, and R0", () => {
  assert.equal(formatRand(1500), "R1,500");
  assert.equal(formatRand(750), "R750");
  assert.equal(formatRand(0), "R0");
});
