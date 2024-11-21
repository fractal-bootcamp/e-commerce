"use client";

// import Image from "next/image";
import { Product } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface XProductListingProps {
  country: string;
  products: Product[];
}

const XProductListing = ({ country, products }: XProductListingProps) => {
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: string]: number }>({});

  const updateQuantity = (productId: string, delta: number) => {
    setSelectedQuantities(prev => {
      const currentQty = prev[productId] || 0;
      const newQty = Math.max(0, Math.min(
        currentQty + delta,
        products.find(p => p.id === productId)?.inventory_count || 0
      ));
      return { ...prev, [productId]: newQty };
    });
  };

  const countryNameNormalised = country.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Snacks from {countryNameNormalised}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, key) => (
          <Link
            key={key}
            href={`/products/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col h-full p-4 border-b-2 border-gray-200">
              <h2 className="flex text-xl font-semibold mb-2">{product.name}</h2>
              {product.imageUrl && (
                <div className="relative w-full aspect-video mb-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
              )}
              <p className="flex text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-lg font-bold">${(product.price / 100).toFixed(2)}</span>
                <div className="flex items-center gap-2">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        updateQuantity(product.id, -1);
                      }}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-l-md"
                      disabled={!selectedQuantities[product.id]}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">
                      {selectedQuantities[product.id] || 0}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        updateQuantity(product.id, 1);
                      }}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-100 rounded-r-md"
                      disabled={selectedQuantities[product.id] >= (product.inventory_count || 0)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      // TODO: Add to cart logic here using selectedQuantities[product.id]
                      console.log(`Adding ${selectedQuantities[product.id]} of ${product.id} to cart`);
                    }}
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-200 shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={!selectedQuantities[product.id]}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">{product.inventory_count} in stock</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default XProductListing;
