import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // setCart acts as addToCart
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const removeFromCart = (id) => {
    console.log("ID IN CONTEXT REMOVE", id);
    const cartAfterRemove = cart.filter((item) => {
      console.log("ITEM IN FILTER REMOVE ITEM", item);
      if (item.id !== id) {
        return item;
      }
    });
    console.log("CART AFTER REMOVE", cartAfterRemove);
    cartAfterRemove.length > 0 ? setCart(cartAfterRemove) : setCart([]);
  };

  useEffect(() => {
    console.log("ITEMS IN CART", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart, clearCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
