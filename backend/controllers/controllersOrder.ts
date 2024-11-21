import type { Request, Response } from "express";
import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";
import type { OrderStatus } from "../types/schema";

// Get all orders
export const getAllOrders = withLogging(
  "getAllOrders",
  false,
  async (req: Request, res: Response) => {
    const response = await prisma.order.findMany({
      include: {
        products: {
          select: {
            id: true,
            name: true,
            price: true,
          },
        },
      },
    });
    res.status(200).json(response);
  }
);

// Get single order
export const getOrder = withLogging("getOrder", false, async (req: Request, res: Response) => {
  const { orderId } = req.body;
  const response = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
    include: {
      products: {
        select: {
          id: true,
          name: true,
          price: true,
        },
      },
    },
  });
  res.status(200).json(response);
});

// Add order
export const addOrder = withLogging("addOrder", false, async (req: Request, res: Response) => {
  const { auth0Id, total, orderStatus, productIds } = req.body;
  const orderStatusTyped: OrderStatus = orderStatus;
  const response = await prisma.order.create({
    data: {
      userId: auth0Id,
      total: total,
      orderStatus: orderStatusTyped,
      products: {
        connect: productIds.map((id: string) => ({ id })),
      },
    },
  });
  res.status(200).json(response);
});

// Update order
export const updateOrder = withLogging(
  "updateOrder",
  false,
  async (req: Request, res: Response) => {
    const { orderId, auth0Id, total, orderStatus } = req.body;
    const orderStatusTyped: OrderStatus = orderStatus;
    const response = await prisma.order.update({
      where: {
        id: orderId,
      },
      data: {
        userId: auth0Id,
        total: total,
        orderStatus: orderStatusTyped,
      },
    });
    res.status(200).json(response);
  }
);

// Delete order
export const deleteOrder = withLogging(
  "deleteOrder",
  false,
  async (req: Request, res: Response) => {
    const { orderId } = req.body;
    const response = await prisma.order.delete({
      where: {
        id: orderId,
      },
    });
    res.status(200).json(response);
  }
);

// Update order products
export const updateOrderProducts = withLogging(
  "updateOrderProducts",
  false,
  async (req: Request, res: Response) => {
    const { orderId, productIds, action } = req.body;
    let prismaOperation;

    switch (action) {
      case "set":
        prismaOperation = {
          set: productIds.map((id: string) => ({ id })),
        };
        break;

      case "add":
        prismaOperation = {
          connect: productIds.map((id: string) => ({ id })),
        };
        break;

      case "remove":
        prismaOperation = {
          disconnect: productIds.map((id: string) => ({ id })),
        };
        break;
    }

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        products: prismaOperation,
      },
      include: {
        products: true,
      },
    });

    res.status(200).json(updatedOrder);
  }
);
