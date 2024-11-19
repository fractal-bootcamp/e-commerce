import type { Request, Response } from "express";
import prisma from "../prisma/client";

export const getProductsFromCountry = async (req: Request, res: Response) => {
  const { country } = req.body;
  const response = await prisma.product.findMany({
    where: {
      country: country,
    },
  });
  res.status(200).json(response);
};

export const getSpecificProduct = async (req: Request, res: Response) => {
  const { productId } = req.body;
  const response = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  res.status(200).json(response);
};
