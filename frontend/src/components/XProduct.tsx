"use client";

import { storeCart } from "@/store/storeCart";
import { CartProduct } from "@/types/cart";
import { Product } from "@/types/types";
import React, { useState } from "react";
import Image from "next/image";
import AddToCart from "./XAddToCart";

interface XProductProps {
  product: Product;
}

const XProduct = ({ product }: XProductProps) => {
  const [selectedQuantities, setSelectedQuantities] = useState<{ [key: string]: number }>({});
  const { items, addItem } = storeCart();


  const updateQuantity = (productId: string, delta: number) => {
    setSelectedQuantities(prev => {
      const currentQty = prev[productId] || 0;
      const newQty = Math.max(0, Math.min(currentQty + delta, product.inventory_count || 0));
      return { ...prev, [productId]: newQty };
    });
  };

  const handleAddToCart = () => {
    const item: CartProduct | undefined = items.find((item) => item.id === product.id);
    if (item) {
      updateQuantity(product.id, item.quantity + 1);
    } else {
      const cartProduct: CartProduct = {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
        country: product.country,
        inventory_count: product.inventory_count,
        quantity: 1,
      };
      addItem(cartProduct);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-900 text-center mb-4">{product.name}</h1>
      <div className="relative w-full aspect-square max-w-sm mx-auto border border-gray-300 rounded-md my-4">
        <Image
          src={product.imageUrl || '/placeholder-image.jpg'}
          alt={product.name}
          fill
          className="object-contain"
        />
      </div>
      <div className="text-2xl font-bold my-4">Price: ${(product.price / 100).toFixed(2)}</div>
      <div className="my-4">
        <AddToCart product={product} selectedQuantities={selectedQuantities} updateQuantity={updateQuantity} />
        <div className="text-md my-4"><strong>Status:</strong> {product.inventory_count > 0 ? 'In Stock' : 'Out of Stock'}</div>
      </div>
      <div className="text-md my-4"><strong>Country of Origin:</strong> {product.country}</div>
      <div className="text-md my-4"><strong>Description:</strong> {product.description}</div>
      <div className="text-md my-4"><strong>Ingredients:</strong> tbd</div>
    </div>
  );
};

export default XProduct;
