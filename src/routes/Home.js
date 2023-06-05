import { useEffect, useState } from "react";
import "../css/Home.css";
export const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className="home-container">
      <h1>Finger Boards</h1>
      <p>Display Product cards</p>
      <p>OnClick will open product detail page</p>
      <p>Have dropdown to filter products</p>
      <label htmlFor="product-filter">Filter Products: </label>
      <select
        name="product-filter"
        id="filter-dropdown-element"
        onChange={(e) => {
          console.log("DROP DOWN VALUE = ", e.target.value);
          setFilter(e.target.value);
        }}
      >
        <option value={"all"}>All Products</option>
        <option value={"deck"}>Complete Decks</option>
        <option value={"park"}>Complete Parks</option>
        <option value={"parts"}>Fingerboard Accessories</option>
        <option value={"pieces"}>Park Pieces</option>
      </select>
    </div>
  );
};

// small change
