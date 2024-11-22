"use client";

import XProductListing from "@/components/XProductListing";
import { useProducts } from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "India";
  const { products } = useProducts();

  const countryProducts =
    products?.filter((product) => product.country.toLowerCase() === country.toLowerCase()) || [];

  return (
    <div className="container mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <XProductListing country={country} products={countryProducts} />
      </Suspense>
    </div>
  );
};

export default Page;
