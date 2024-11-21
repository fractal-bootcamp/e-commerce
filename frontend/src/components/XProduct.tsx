"use client";

import { storeCart } from "@/store/storeCart";
import { CartProduct } from "@/types/cart";
import { Product } from "@/types/types";
import React from "react";

interface XProductProps {
  product: Product;
}

const XProduct = ({ product }: XProductProps) => {
  const { items, addItem, updateQuantity } = storeCart();

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
    <div className="text-black">
      <div>productId: {product.id}</div>
      <button onClick={() => handleAddToCart()} className="border-2 p-2">
        Add to Cart
      </button>
    </div>
  );
};

export default XProduct;
