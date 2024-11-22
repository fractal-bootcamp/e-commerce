import { z } from "zod";
import { CartProduct } from "@/types/cart";
import { AppRouterInstance } from "@/app/cart/page";

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


export const handleStripeIntegration = async (
  items: CartProduct[], 
  idToken: string,
  setClientSecret: (clientSecret: string) => void,
  setPaymentIntentId: (paymentIntentId: string) => void,
  router: AppRouterInstance
) => {
  try {
    // Transform the items array into the expected structure
    const paymentData = {
      cart: {
        items: items.map(item => ({
          id: item.id,
          quantity: item.quantity,
          priceInCents: item.price // Assuming price is in cents
        }))
      },
      currency: 'usd', // Add your currency
      metadata: {}, // Add any metadata you need
      orderId: Date.now().toString() // Generate an orderId or pass it from elsewhere
    };
    console.log("paymentData", paymentData);
    // Validate the transformed data
    const validatedData = createPaymentIntentSchema.parse(paymentData);
    console.log("validatedData", validatedData);
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
    console.log("data", data);
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