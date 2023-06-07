import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";
import { ProductView } from "../views/ProductView";
import "../css/Cart.css";

export const Cart = () => {
  const { cart } = useCart();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, []);

  useEffect(() => {
    console.log("TYPE OF TOTALPRICE IS : ", typeof totalPrice);
    console.log(totalPrice.toFixed(2));
  }, [totalPrice]);
  return (
    <div className="cart-container">
      <h1>Cart</h1>
      <p>Display contents of cart with prices and checkout button</p>
      <span className="cart-items-container">
        {cart &&
          cart.map((item, i) => {
            return (
              <ProductView
                key={item.id + "-" + item.type + "-" + item.name + "-" + i}
                product={item}
              />
            );
          })}
      </span>

      <p>Checkout will be handled by stripe</p>
      <aside className="cart-bill-display">
        <p>Total: ${totalPrice}</p>
      </aside>
    </div>
  );
};
