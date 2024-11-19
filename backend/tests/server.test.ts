import { describe, it, expect } from "vitest";
import request from "supertest";

import { app } from "../server";
import { getToken } from "../utils/getToken";

// /api/
describe('("/")', () => {
  it('should return "Hello world!"', async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world!");
  });

  it("should handle different HTTP methods", async () => {
    const postResponse = await request(app).post("/");
    expect(postResponse.status).toBe(404);
  });
});

// /api/public
describe('("/public")', () => {
  it("should return correct message and 200 status", async () => {
    const response = await request(app).get("/public");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: "Public endpoint",
    });
  });

  it("should return JSON content type", async () => {
    const response = await request(app).get("/public");

    expect(response.headers["content-type"]).toContain("application/json");
  });

  it("should handle invalid HTTP methods", async () => {
    const postResponse = await request(app).post("/public");
    expect(postResponse.status).toBe(404);
  });
});

// /api/authenticated
describe('("/authenticated")', async () => {
  const validToken = await getToken();
  const token = validToken.access_token;

  it("should return 200 and user data with valid token", async () => {
    const response = await request(app)
      .get("/authenticated")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it("should return JSON content type", async () => {
    const response = await request(app)
      .get("/authenticated")
      .set("Authorization", `Bearer ${token}`);

    expect(response.headers["content-type"]).toContain("application/json");
  });

  it("should handle invalid HTTP methods", async () => {
    const postResponse = await request(app)
      .post("/authenticated")
      .set("Authorization", `Bearer ${token}`);

    expect(postResponse.status).toBe(404);
  });
});
