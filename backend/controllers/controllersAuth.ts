import type { Request, Response } from "express";
import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";

export const firebaseSignup = withLogging(
  "firebaseSignup",
  false,
  async (req: Request, res: Response) => {
    const { firebaseId, email } = req.body;
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [{ auth0Id: firebaseId }, { email: email }],
      },
    });

    if (existingUser) {
      const message =
        existingUser.auth0Id === firebaseId
          ? "Firebase ID already registered"
          : "Email already registered";
      res.status(200).json({ message: message });
    } else {
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
