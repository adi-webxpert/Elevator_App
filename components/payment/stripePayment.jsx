import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
  }
  return stripePromise;
};

export async function stripePayment({ lineItems }) {
  const stripe = await getStripe();

  try {
    await stripe.redirectToCheckout({
      mode: "subscription",
      lineItems,
      successUrl: `${window.location.origin}/about?session_id={CHECKOUT_SESSION_ID}`, 
      
      cancelUrl: window.location.origin,
    });
  } catch (error) {
    console.error("Error during Stripe checkout:", error);
  }
}
