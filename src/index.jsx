import React from "react";
import { render } from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import { ProductListProvider } from "./context/ProductListProvider";

render(
  <React.StrictMode>
    <ProductListProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductListProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
