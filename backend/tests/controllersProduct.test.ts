import { describe, expect, vi, it, beforeEach } from "vitest";
import request from "supertest";
import { app } from "../server";
import { getIdToken } from "../firebase/getIdToken";

describe("POST /product/getProductsFromCountry", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200", async () => {
    const token = await getIdToken();
    const response = await request(app)
      .post("/product/getProductsFromCountry")
      .send({ country: "JAPAN" })
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);

    // console.log(response.body);
  });
});

describe("POST /product/getProduct", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 200", async () => {
    const token = await getIdToken();
    const response = await request(app)
      .post("/product/getProduct")
      .send({ productId: "cm3oq1ffb001ephoadsa2t6c8" })
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);

    // console.log(response.body);
  });
});
