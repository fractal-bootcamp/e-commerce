import request from "supertest";
import { app } from "../server";

describe("GET /", () => {
  it("should return Hello World", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});

describe("GET /authcheck", () => {
  it("should return logged in or logged out", async () => {
    const response = await request(app).get("/authcheck");
    expect(response.status).toBe(200);
    expect(response.text).toMatch(/Logged in|Logged out/);
  });
});

describe("GET /profile", () => {
  it("should return user profile", async () => {
    const response = await request(app).get("/profile");
    expect(response.status).toBe(200);
  });
});
