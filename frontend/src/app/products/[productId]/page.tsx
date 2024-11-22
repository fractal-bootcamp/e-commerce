"use client";

import XProduct from "@/components/XProduct";
import XProtectedRoute from "@/components/XProtectedRoute";
import { useProducts } from "@/hooks/useProducts";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams<{ productId: string }>();
  const { products } = useProducts();
  const product = products.find((product) => product.id === params.productId);

  return (
    <XProtectedRoute>
      <div className="p-4">{product && <XProduct product={product} />}</div>
    </XProtectedRoute>
  );
};

export default Page;
