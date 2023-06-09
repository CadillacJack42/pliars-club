// import CheckoutForm from "../forms/CheckoutForm";
import "../css/StripeCheckout.css";
import { Checkout } from "../components/Checkout";

export const StripeCheckout = () => {
  const check = Checkout();
  console.log("RESPONSE FROM CHECKOUT CALL", check);
  return <div className="stripe-checkout-container">TESTING</div>;
};
