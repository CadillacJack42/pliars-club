import { useEffect, useState } from "react";
import "../css/Home.css";
import { ProductsList } from "../components/ProductsList";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className="home-container">
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
        <option value={"parts"}>Fingerboard Accessories</option>
        <option value={"pieces"}>Park Pieces</option>
      </select>

      <ProductsList filter={filter} />
    </div>
  );
};
