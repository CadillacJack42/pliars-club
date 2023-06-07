import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { ProductView } from "../views/ProductView";
import "../css/Cart.css";

export const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  useEffect(() => {
    console.log("TYPE OF TOTALPRICE IS : ", typeof totalPrice);
    console.log(totalPrice.toFixed(2));
  }, [totalPrice]);

  const handleRemoveCartItem = (item) => {
    console.log(
      "You have attempted to remove an item from the cart!! Please don't do that",
      item
    );
    removeFromCart(item.id);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <p>Display contents of cart with prices and checkout button</p>
      <span className="cart-items-container">
        {cart.length > 0 &&
          cart.map((item, i) => {
            return (
              <span
                key={item.id + "-" + item.type + "-" + item.name + "-" + i}
                className="cart-item-view"
              >
                <ProductView product={item} />
                <button onClick={() => handleRemoveCartItem(item)}>
                  Remove From Cart
                </button>
              </span>
            );
          })}
      </span>

      <p>Checkout will be handled by stripe</p>
      <aside className="cart-bill-display">
        <p>Total: ${totalPrice > 0 ? `${totalPrice.toFixed(2)}` : "0.00"}</p>
      </aside>
    </div>
  );
};
