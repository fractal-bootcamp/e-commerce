"use client";

import XProductListing from "@/components/XProductListing";
import { useProducts } from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "India";
  const { products } = useProducts();

  const countryProducts =
    products?.filter((product) => product.country.toLowerCase() === country.toLowerCase()) || [];

  return (
    <div className="container mx-auto">
      <XProductListing country={country} products={countryProducts} />
    </div>
  );
};

export default Page;
