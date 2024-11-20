import { describe, expect, vi, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../server";
import { getIdToken } from "../firebase/getIdToken";

describe("POST /rag/ragQuery", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200", async () => {
    const token = await getIdToken();
    const response = await request(app)
      .post("/rag/ragQuery")
      .send({ query: "Give me the top three products from Japan" })
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);

    console.log(response.body);
  });
});
