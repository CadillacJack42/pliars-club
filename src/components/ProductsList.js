import { useEffect, useState } from "react";
import { getProducts } from "../utils/fetch-utils";
import { ProductView } from "../views/ProductView";

export const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <div className="products-list-container">
      {products.length > 0 &&
        products.map((product) => {
          console.log(product);
          return <ProductView product={product} />;
        })}
    </div>
  );
};
