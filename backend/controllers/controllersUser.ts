import type { Request, Response } from "express";

import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";

export const getAllUsers = withLogging(
  "getAllUsers",
  false,
  async (req: Request, res: Response) => {
    const response = await prisma.user.findMany({});
    res.status(200).json(response);
  }
);
