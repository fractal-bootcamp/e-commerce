"use client";

// import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "./XAddToCart";

interface XProductListingProps {
  country: string;
  products: Product[];
}

const XProductListing = ({ country, products }: XProductListingProps) => {

  const countryNameNormalised = country.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-8">Snacks from {countryNameNormalised}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, key) => (
          <Link
            key={key}
            href={`/products/${product.id}`}
            className="bg-white dark:bg-neutral-100 dark:text-amber-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col h-full p-4 border-2 border-gray-200 dark:border-neutral-500">
              <h2 className="flex text-xl font-semibold mb-2">{product.name}</h2>
              {product.imageUrl && (
                <div className="relative w-full aspect-video mb-4 border">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="flex text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-evenly items-center mt-auto">
                <span className="text-lg font-bold">${(product.price / 100).toFixed(2)}</span>
                <AddToCart product={product} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default XProductListing;
