import { describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../server";
import { getIdToken } from "../firebase/getIdToken";
import { OrderStatus } from "../types/types";

const token = await getIdToken();
const testAuth0Id = "eGseBlc8nweo32FfpNPi56IdtnS2";
const testOrderId = "cm3oq1fkg0056phoaq4s6hwua";
const testProductIds = [
  "cm3oq1ffb001ephoadsa2t6c8",
  "cm3oq1ffb001ephoadsa2t6c8",
  "cm3oq1ffc001gphoa8r24cvz9",
];

describe("POST /order/addOrder", () => {
  it("should create a new order", async () => {
    const orderData = {
      auth0Id: testAuth0Id,
      total: 1000,
      orderStatus: "PENDING",
    };

    const response = await request(app)
      .post("/order/addOrder")
      .send(orderData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", response.body.id);
    expect(response.body).toHaveProperty("userId", response.body.userId);
    expect(response.body).toHaveProperty("total", response.body.total);
    expect(response.body).toHaveProperty("orderStatus", response.body.orderStatus);
  });
});

describe("POST /order/updateOrderProducts", () => {
  it("should add products to an order", async () => {
    const updateData = {
      orderId: testOrderId,
      productIds: testProductIds.slice(0, 2),
      action: "add",
    };

    const response = await request(app)
      .post("/order/updateOrderProducts")
      .send(updateData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it("should replace all products in an order", async () => {
    const updateData = {
      orderId: testOrderId,
      productIds: testProductIds.slice(2, 3),
      action: "set",
    };

    const response = await request(app)
      .post("/order/updateOrderProducts")
      .send(updateData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });

  it("should remove specific products from an order", async () => {
    const updateData = {
      orderId: testOrderId,
      productIds: testProductIds.slice(2, 3),
      action: "remove",
    };

    const response = await request(app)
      .post("/order/updateOrderProducts")
      .send(updateData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});

describe("POST /order/getAllOrders", () => {
  it("should return all orders", async () => {
    const response = await request(app)
      .post("/order/getAllOrders")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });
});

describe("POST /order/getOrder", () => {
  it("should return specific order", async () => {
    console.log("testOrderId");
    console.log(testOrderId);
    const response = await request(app)
      .post("/order/getOrder")
      .send({ orderId: testOrderId })
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id", testOrderId);
  });
});

describe("POST /order/updateOrder", () => {
  it("should update order details", async () => {
    const updateData = {
      orderId: testOrderId,
      total: 2000,
      orderStatus: OrderStatus.DELIVERED,
    };

    const response = await request(app)
      .post("/order/updateOrder")
      .send(updateData)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("total", response.body.total);
    expect(response.body).toHaveProperty("orderStatus", response.body.orderStatus);
  });
});

// describe("POST /order/deleteOrder", () => {
//   it("should delete an order", async () => {
//     const response = await request(app)
//       .post("/order/deleteOrder")
//       .send({ orderId: testOrderId })
//       .set("Authorization", `Bearer ${token}`);

//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("id", testOrderId);

//     // Verify deletion
//     const getResponse = await request(app)
//       .post("/order/getOrder")
//       .send({ orderId: testOrderId })
//       .set("Authorization", `Bearer ${token}`);

//     expect(getResponse.status).toBe(404);
//   });
// });
