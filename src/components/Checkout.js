import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "../hooks/useCart";

import CheckoutForm from "../forms/CheckoutForm";
import "../css/Checkout.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51NGqg7LXUFfNg8SmKkLBbGgOHA2w78hBKPNG4FKs4cHqZf7E8GVksCJa2eQBs4NVQinaF9FdX7c1UCZTV5cc2uHo0011MK1uNh"
);

console.log("STRIPE PROMISE IN CHECKOUT", stripePromise);

export const Checkout = () => {
  const { cart } = useCart();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    console.log("SECRET CHANGED", clientSecret);
  }, [clientSecret]);

  useEffect(() => {
    console.log("IM IN THE CHECKOUT COMPONENT USEEFECT");
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="checkout">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};
