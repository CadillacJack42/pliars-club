import React from "react";
import { render } from "react-dom";
import App from "./App";
import { CartProvider } from "./context/CartProvider";

render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
