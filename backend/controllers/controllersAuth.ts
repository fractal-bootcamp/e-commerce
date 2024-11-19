import type { Request, Response } from "express";
import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";

export const firebaseSignup = withLogging(
  "firebaseSignup",
  false,
  async (req: Request, res: Response) => {
    const { firebaseId, email } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { auth0Id: firebaseId },
    });

    if (existingUser) {
      // If user already exists
      res.status(200).json({ message: "User already exists." });
    } else {
      // If user does not exist
      const response = await prisma.user.create({
        data: {
          auth0Id: firebaseId,
          email: email,
        },
      });
      res.status(200).json(response);
    }
  }
);
