import { useContext } from "react";
import { ProductListContext } from "../context/ProductListProvider";

export const useProductList = () => {
  const context = useContext(ProductListContext);
  if (context === null) {
    throw new Error("Product List context must come from ProductProvider");
  }
  return context;
};
