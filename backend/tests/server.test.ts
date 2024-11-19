import { describe, expect, vi, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../server"; // Ensure this path is correct

describe("GET /", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200 and Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toMatch("Hello World!");
  });
});
