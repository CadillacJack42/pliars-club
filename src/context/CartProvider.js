import { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("CART HAS CHANGED", cart);
  }, [cart]);

  const clearCart = () => setCart([]);

  const addToCart = (newItem) => {
    if (cart.length === 0) {
      newItem.quantity = 1;
      setCart([newItem]);
    }

    const idArray = cart.map((item) => item.id);
    console.log(idArray);

    if (!idArray.includes(newItem.id)) {
      console.log("ADDING WITH QUANTITY 1");
      newItem.quantity = 1;
      setCart([...cart, newItem]);
    } else {
      cart[idArray.indexOf(newItem.id)].quantity++;
      console.log("QUANTITY OF ", newItem, "SHOULD HAVE INCREMENTED", cart);
      setCart([...cart]);
    }
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
