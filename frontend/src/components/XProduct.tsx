"use client";

import { Product } from "@/types/types";
import React from "react";

interface XProductProps {
  product: Product;
}

const XProduct = ({ product }: XProductProps) => {
  return <div className="text-black">{product.id}</div>;
};

export default XProduct;
