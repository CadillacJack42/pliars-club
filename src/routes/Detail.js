import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils/fetch-utils";
import { ProductView } from "../views/ProductView";

export const Detail = () => {
  const { id } = useParams();
  console.log("LOCATION IN DETAIL", id);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductById(id).then((res) => setProduct(res));
  }, []);

  useEffect(() => {
    console.log("PRODUCT ON LOAD DETAIL", product);
  }, [product]);
  return (
    <div>
      <h1>Detail Page</h1>
      <p>Product display with details and add to cart function</p>
      <ProductView product={product} />
    </div>
  );
};
