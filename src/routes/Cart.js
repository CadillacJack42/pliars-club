import { CartBillDisplay } from "../components/CartBillDisplay";
import { useNavigate } from "react-router-dom";
import { ProductView } from "../views/ProductView";
import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import "../css/Cart.css";
import { Checkout } from "../components/Checkout";

export const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    setTotalPrice(
      cart.reduce((acc, curr) => acc + Number(curr.price * curr.quantity), 0)
    );
  }, [cart]);

  const handleRemoveCartItem = (i) => {
    removeFromCart(i);
  };

  const handleCheckout = () => {
    const response = Checkout(cart);
    console.log("RESPONSE FROM HANDLE CHECK OUT", response);
  };

  return (
    <div className="cart-container">
      <span className="cart-items-container">
        {cart.length > 0 &&
          cart.map((item, i) => {
            return (
              <span
                key={item.id + "-" + item.type + "-" + item.name + "-" + i}
                className="cart-item-view"
              >
                <ProductView product={item} />
                <button onClick={() => handleRemoveCartItem(i)}>
                  Remove From Cart
                </button>
              </span>
            );
          })}
      </span>

      <aside className="cart-bill-display">
        <CartBillDisplay />

        <p>Total: ${totalPrice > 0 ? `${totalPrice.toFixed(2)}` : "0.00"}</p>
        <button onClick={() => clearCart()}>Clear Cart</button>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </aside>
    </div>
  );
};
