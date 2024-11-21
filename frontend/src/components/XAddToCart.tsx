import { Product } from "@/types/types";

const AddToCart = ({ product, selectedQuantities, updateQuantity }: { product: Product, selectedQuantities: { [key: string]: number }, updateQuantity: (productId: string, quantity: number) => void }) => {
  return (
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
          // TODO: onClick add to cart logic + create toast notification and change cart count in navbar
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

  )
};

export default AddToCart;
