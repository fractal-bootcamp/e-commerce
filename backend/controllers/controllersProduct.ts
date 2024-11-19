import type { Request, Response } from "express";
import prisma from "../prisma/client";
import { withLogging } from "../utils/withLogging";
import type { CreateProductProps } from "../types/types";

export const getProductsFromCountry = withLogging(
  "getProductsFromCountry",
  false,
  async (req: Request, res: Response) => {
    const { country } = req.body;
    const response = await prisma.product.findMany({
      where: {
        country: country,
      },
    });
    res.status(200).json(response);
  }
);

export const getProduct = withLogging("getProduct", false, async (req: Request, res: Response) => {
  const { productId } = req.body;
  const response = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });
  res.status(200).json(response);
});

export const createProduct = withLogging("createProduct", false, async (req: Request, res: Response) => {
  const { product }: CreateProductProps = req.body;
  
  // Validate required fields
  if (!product.name || typeof product.inventory_count !== 'number' || typeof product.price !== 'number') {
    res.status(400).json({ 
      error: 'Missing required fields. Name, inventory_count, and price are required.' 
    });
  }

  try {
    const response = await prisma.product.create({
      data: product,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
});