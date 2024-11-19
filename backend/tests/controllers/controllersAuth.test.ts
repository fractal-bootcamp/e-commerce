import { describe, expect, vi, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../../server";
import { getIdToken } from "../../firebase/getIdToken";

describe("POST /auth/signup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200 and firebaseId", async () => {
    const token = await getIdToken();
    const response = await request(app)
      .post("/auth/signup")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
    // expect(response.text).toMatch("Hello World!");
  });
});
