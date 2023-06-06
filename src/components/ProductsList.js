import { useEffect, useState } from "react";
import { getProducts } from "../utils/fetch-utils";
import { ProductView } from "../views/ProductView";
import "../css/ProductsList.css";

export const ProductsList = ({ filter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
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
  );
};
