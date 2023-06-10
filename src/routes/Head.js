import { Outlet, useNavigate } from "react-router-dom";
import "../css/Head.css";
import { useCart } from "../hooks/useCart";

export const Head = () => {
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const count = cartCount();

  return (
    <div className="header-container">
      <header className="header">
        <img
          onClick={() => navigate("/")}
          className="site-logo"
          src="plairs-club.jpg"
        ></img>
        <h1 className="header-site-welcome">
          Welcome to Matts' Finger Flippin Fingerboard Site
        </h1>
        <span className="cart-logo-and-count-container">
          <img
            onClick={() => navigate("/cart")}
            className="checkout-cart-logo"
            src="cart-icon.png"
          ></img>
          {count > 0 && <span className="cart-length-indicator">{count}</span>}
        </span>
      </header>
      <hr></hr>
      <Outlet />
      <footer className="footer">
        <span>created by: CadillacJack</span>

        <button onClick={() => navigate("/admin")}>Admin</button>
      </footer>
    </div>
  );
};
