import { describe, it, expect } from "vitest";
import { formatDateParts } from "./date.js";

describe("formatDateParts", () => {
  it("Formats a date and time correctly for API request.", () => {
    const date = new Date("2025-07-28T11:38:30.343Z");
    expect(formatDateParts(date)).toBe("2025-07-28");
  });
});
