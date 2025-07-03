import { describe, it, expect } from "vitest";
import { formatDateParts } from "./date.js";

describe("formatDateParts", () => {
  it("formats a date correctly", () => {
    const date = new Date(2024, 4, 9);
    expect(formatDateParts(date)).toBe("2024-05-09");
  });
});
