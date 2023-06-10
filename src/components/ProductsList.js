import { useEffect, useState } from "react";
import { getProducts } from "../utils/fetch-utils";
import { ProductView } from "../views/ProductView";
import "../css/ProductsList.css";
import { useProductList } from "../hooks/useProductList";
export const ProductsList = () => {
  const { products } = useProductList();
  const [filter, setFilter] = useState("all");

  return (
    <div className="products-list-tab">
      <h1>Finger Boards</h1>
      <label htmlFor="filter-dropdown-element">Filter Products: </label>
      <select
        name="product-filter"
        id="filter-dropdown-element"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
      >
        <option value={"all"}>All Products</option>
        <option value={"deck"}>Complete Decks</option>
        <option value={"park"}>Complete Parks</option>
        <option value={"accessories"}>Fingerboard Accessories</option>
        <option value={"pieces"}>Park Pieces</option>
      </select>
      <div className="products-list-container">
        {products.length > 0 &&
          products.map((product) => {
            if (
              filter === "all" ||
              filter === undefined ||
              filter === product.type
            ) {
              return (
                <ProductView
                  key={product.id + "-" + product.name}
                  product={product}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
