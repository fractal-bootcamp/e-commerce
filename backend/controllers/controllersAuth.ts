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
      const errorMessage =
        existingUser.auth0Id === firebaseId
          ? "Firebase ID already registered"
          : "Email already registered";
      res.status(409).json({ error: errorMessage });
    }

    const response = await prisma.user.create({
      data: {
        auth0Id: firebaseId,
        email: email,
      },
    });
    res.status(201).json(response);
  }
);
