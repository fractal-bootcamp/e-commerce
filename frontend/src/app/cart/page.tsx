"use client";

import { storeCart } from "@/app/store/storeCart";
import { useStoreStripe } from "@/app/store/storeStripe";
// import Image from "next/image";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const createPaymentIntentSchema = z.object({
  cart: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        quantity: z.number(),
        priceInCents: z.number(),
      })
    ),
  }),
  currency: z.string(),
  metadata: z.record(z.string(), z.string()),
  orderId: z.string(),
});

export default function Cart() {
  const router = useRouter();
  const { items, total, updateQuantity, removeItem } = storeCart();
  const { setClientSecret, setPaymentIntentId } = useStoreStripe();
  const { idToken } = useAuth();

  const handleTestStripeIntegration = async () => {
    try {
      // Validate the data against the schema
      const validatedData = createPaymentIntentSchema.parse(items);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/payment/createPaymentIntent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify(validatedData),
        }
      );

      const data = await response.json();
      // store payment options in global state
      setClientSecret(data.clientSecret);
      console.log("client secret", data.clientSecret);
      // store payment intent id in global state
      setPaymentIntentId(data.paymentIntentId);
      console.log("payment intent id", data.paymentIntentId);

      if (!data.clientSecret) {
        console.error("No client secret received");
        return;
      }

      // navigate the user to the payment page
      router.push("/payment");
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error("Validation error:", error.errors);
        // Handle validation error (e.g., show error message to user)
      } else {
        console.error("Error creating payment intent:", error);
        // Handle other errors
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-amber-800 mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="relative w-24 h-24">
                  {/* <Image
                    // src={item.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover rounded-md"
                  /> */}
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-gray-500">{item.country}</p>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity! - 1)}
                        className="text-amber-800 hover:text-amber-600"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity! + 1)}
                        className="text-amber-800 hover:text-amber-600"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">
                    ${((item.price * item.quantity!) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${(total / 100).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${(total / 100).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-amber-500 text-white py-2 rounded-full hover:bg-amber-600 transition-colors">
                Proceed to Checkout
              </button>
              <button
                onClick={handleTestStripeIntegration}
                className="w-full bg-amber-500 text-white py-2 mt-8 rounded-full hover:bg-amber-600 transition-colors"
              >
                Test Stripe Integration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
