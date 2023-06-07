import { createContext, useState, useEffect } from "react";
import { getProducts } from "../utils/fetch-utils";

export const ProductListContext = createContext(null);

export const ProductListProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const populateList = () => {
    getProducts().then((res) => setProducts(res));
  };

  useEffect(() => {
    populateList();
  }, []);

  return (
    <ProductListContext.Provider
      value={{
        products,
        populateList,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};
