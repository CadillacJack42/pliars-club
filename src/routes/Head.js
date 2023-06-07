import { Outlet, useNavigate } from "react-router-dom";
import "../css/Head.css";
import { useCart } from "../hooks/useCart";

export const Head = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  console.log("CART COUNT", cartCount);

  return (
    <div className="header-container">
      <header className="header">
        <img
          onClick={() => navigate("/")}
          className="site-logo"
          src="cruiser_example.jpeg"
        ></img>
        <h1>Welcome to Matts' Finger Flippin Fingerboard Site</h1>
        <span className="cart-logo-and-count-container">
          <img
            onClick={() => navigate("/cart")}
            className="checkout-cart-logo"
            src="cart-icon.png"
          ></img>
          {cartCount > 0 && (
            <span className="cart-length-indicator">{cartCount}</span>
          )}
        </span>
      </header>
      <hr></hr>
      <Outlet />
    </div>
  );
};
