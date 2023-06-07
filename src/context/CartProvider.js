import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  // setCart acts as addToCart
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const removeFromCart = (id) => {
    const cartAfterRemove = cart.map((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setCart(cartAfterRemove);
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
