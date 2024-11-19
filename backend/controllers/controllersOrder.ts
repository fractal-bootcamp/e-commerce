import type { Request, Response } from "express";
import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";

export const getAllOrders = withLogging(
  "getAllOrders",
  false,
  async (req: Request, res: Response) => {
    const response = await prisma.order.findMany({});
    res.status(200).json(response);
  }
);

export const getOrder = withLogging("getOrder", false, async (req: Request, res: Response) => {
  const { orderId } = req.body;
  const response = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });
  res.status(200).json(response);
});
