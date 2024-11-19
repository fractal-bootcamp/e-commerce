import type { Request, Response } from "express";

export const firebaseSignup = async (req: Request, res: Response) => {
  const firebaseId = req.body.firebaseId;
  res.status(200).json(firebaseId);
};
