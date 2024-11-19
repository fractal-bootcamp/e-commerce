import { describe, expect, vi, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../server";
import { getIdToken } from "../firebase/getIdToken";

describe("POST /auth/signup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200 and firebaseId", async () => {
    const token = await getIdToken();
    console.log(token);
    const response = await request(app)
      .post("/auth/signup")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: expect.any(String),
      auth0Id: expect.any(String),
      email: expect.any(String),
      name: null,
      address: null,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
      stripeCustomerId: null,
    });

    // console.log(response.body);
  });
});
