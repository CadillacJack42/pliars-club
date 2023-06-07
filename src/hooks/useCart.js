import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("Cart context must come from CartProvider");
  }
  return context;
};
