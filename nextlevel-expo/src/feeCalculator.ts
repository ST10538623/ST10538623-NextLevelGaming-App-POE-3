import type { Offering } from "./data/offerings";

export interface FeeSummary {
  bookingCount: number;
  subtotalRand: number;
  discountPercent: number;
  discountRand: number;
  totalRand: number;
}

export function discountPercentFor(bookingCount: number): number {
  if (bookingCount >= 4) return 15;
  if (bookingCount === 3) return 10;
  if (bookingCount === 2) return 5;
  return 0;
}

export function calculateFees(selected: readonly Offering[]): FeeSummary {
  const distinct = [...new Map(selected.map((item) => [item.id, item])).values()];
  const subtotalRand = distinct.reduce((sum, item) => sum + item.priceRand, 0);
  const discountPercent = discountPercentFor(distinct.length);
  const discountRand = Math.round((subtotalRand * discountPercent) / 100);

  return {
    bookingCount: distinct.length,
    subtotalRand,
    discountPercent,
    discountRand,
    totalRand: subtotalRand - discountRand,
  };
}

export function formatRand(amount: number): string {
  return `R${amount.toLocaleString("en-US")}`;
}
