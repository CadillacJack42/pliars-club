import React from "react";
import { render } from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartProvider";
import { ProductListProvider } from "./context/ProductListProvider";
import { AdminProvider } from "./context/AdminProvider";

render(
  <React.StrictMode>
    <AdminProvider>
      <ProductListProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductListProvider>
    </AdminProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
