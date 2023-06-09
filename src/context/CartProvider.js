import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);

  const addToCart = (newItem) => {
    if (cart.length === 0) {
      newItem.quantity = 1;
      setCart([newItem]);
    }

    const idArray = cart.map((item) => item.id);
    // console.log(idArray);

    if (!idArray.includes(newItem.id)) {
      newItem.quantity = 1;
      setCart([...cart, newItem]);
    } else {
      cart[idArray.indexOf(newItem.id)].quantity++;
      setCart([...cart]);
    }
  };

  const decrementCartItem = (itemToDecrement) => {
    const updatedCart = cart.map((item) => {
      if (itemToDecrement.id === item.id) {
        item.quantity--;
      }

      if (item.quantity !== 0) {
        return item;
      }
    });
    const filteredCart = updatedCart.filter((item) => {
      if (item !== undefined) {
        return item;
      }
    });
    setCart([...filteredCart]);
  };

  const removeFromCart = (i) => {
    cart.splice(i, 1);
    cart.length > 0 ? setCart([...cart]) : setCart([]);
  };

  const cartCount = () => {
    const count = cart.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    return count;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        cartCount,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
