"use client";

import XProduct from "@/components/XProduct";
import { useProducts } from "@/hooks/useProducts";
import useProtectedRoute from "@/hooks/useProtectedRoute";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  useProtectedRoute();
  const params = useParams<{ productId: string }>();
  const { products } = useProducts();
  const product = products.find((product) => product.id === params.productId);
  console.log(product);

  return <div className="p-4">{product && <XProduct product={product} />}</div>;
};

export default Page;
