"use client";

import XProductListing from "@/components/XProductListing";
import { useProducts } from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const ProductContent = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country");
  const { products } = useProducts();

  const countryProducts =
    country && products
      ? products.filter((product) => product.country.toLowerCase() === country.toLowerCase())
      : null;

  return (
    <>
      {country && countryProducts ? (
        <XProductListing country={country} products={countryProducts} />
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

const Page = () => {
  return (
    <div className="container mx-auto">
      <Suspense fallback={<>Loading...</>}>
        <ProductContent />
      </Suspense>
    </div>
  );
};

export default Page;
