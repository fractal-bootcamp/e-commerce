"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import AddToCart from "./XAddToCart";

interface XProductProps {
  product: Product;
}

const XProduct = ({ product }: XProductProps) => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-4">{product.name}</h1>
      <div className="relative w-full aspect-video max-w-sm mx-auto border-gray-300 rounded-md my-4">
        <Image
          src={product.imageUrl || "/placeholder-image.jpg"}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="text-2xl font-bold my-4">Price: ${(product.price / 100).toFixed(2)}</div>
      <div className="my-4">
        <div>
          <AddToCart product={product} />
        </div>
        <div className="text-md my-4">
          <strong>Status:</strong> {product.inventory_count > 0 ? "In Stock" : "Out of Stock"}
        </div>
      </div>
      <div className="text-md my-4">
        <strong>Country of Origin:</strong> {product.country}
      </div>
      <div className="text-md my-4">
        <strong>Description:</strong> {product.description}
      </div>
      <div className="text-md my-4">
        <strong>Ingredients:</strong> tbd
      </div>
    </div>
  );
};

export default XProduct;
