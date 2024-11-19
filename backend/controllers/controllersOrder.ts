import type { Request, Response } from "express";
import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";

export const getOrders = withLogging("getOrders", false, async (req: Request, res: Response) => {
  const response = await prisma.order.findMany({});
  res.status(200).json(response);
});
