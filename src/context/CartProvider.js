import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const addToCart = (newItem) => {
    setCart([...cart, newItem]);
  };

  const removeFromCart = (i) => {
    cart.splice(i, 1);
    cart.length > 0 ? setCart([...cart]) : setCart([]);
  };

  const cartCount = cart?.length;

  useEffect(() => {
    console.log("ITEMS IN CART", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
