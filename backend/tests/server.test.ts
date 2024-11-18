import { describe, it, expect, vi, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../server";
import { auth } from "express-openid-connect";

// Mocking auth connection
vi.mock("express-openid-connect", () => ({
  auth: vi.fn(() => (req: any, res: any, next: any) => {
    req.oidc = {
      isAuthenticated: vi.fn().mockReturnValue(false),
    };
    next();
  }),
  requiresAuth: () => (req: any, res: any, next: any) => {
    req.oidc = req.oidc || {};
    req.oidc.isAuthenticated = vi.fn().mockReturnValue(true);
    next();
  },
}));

// /api/
describe("GET /", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toMatch("Hello World!");
  });
});

// /api/authcheck
describe("GET /authcheck", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("", async () => {
    const response = await request(app).get("/authcheck");

    // Detailed logging
    console.log("Full Response:", {
      status: response.status,
      body: response.text,
      headers: response.headers,
    });

    expect(response.status).toBe(200);
    expect(response.text).toMatch(/Logged in|Logged out/);
  });
});
