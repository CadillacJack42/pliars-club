import { useLocation, useParams } from "react-router-dom";
// import { useStripe } from "@stripe/react-stripe-js";
import "../css/PaymentSuccess.css";
import { useEffect } from "react";
export const PaymentSucces = () => {
  useEffect(() => {
    console.log("IM IN THE SUCCESS COMPONENT USEEFECT");
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/success", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => console.log("SOMETHING???!!!", data));
  }, []);
  return (
    <div className="payment-success-container">
      <h1>Sucess</h1>
      <h2>Now</h2>
      <h3>Verify</h3>
      <h4>That</h4>
      <h5>It</h5>
      <h6>Works</h6>
    </div>
  );
};
