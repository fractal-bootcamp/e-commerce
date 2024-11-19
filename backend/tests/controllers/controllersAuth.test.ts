import { describe, expect, vi, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../../server"; // Ensure this path is correct
import { getIdToken } from "../../firebase/getIdToken";

describe("GET /auth/signup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200 and firebaseId", async () => {
    const token = await getIdToken();
    console.log(token);
    const response = await request(app).get("/auth/signup").set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
    // expect(response.text).toMatch("Hello World!");
  });
});
