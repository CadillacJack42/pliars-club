import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utils/fetch-utils";
import { ProductView } from "../views/ProductView";
import "../css/Detail.css";

export const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    getProductById(id).then((res) => setProduct(res));
  }, []);

  return (
    <div className="detail-page-container">
      <h1>Detail Page</h1>
      <p>Product display with details and add to cart function</p>
      {product && <ProductView product={product} />}
    </div>
  );
};
