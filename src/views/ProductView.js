import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../css/ProductView.css";
import { deleteProductById } from "../utils/fetch-utils";
import { useProductList } from "../hooks/useProductList";

export const ProductView = ({ product, refresh }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { populateList } = useProductList();
  const { addToCart } = useCart();
  const detailPage = new RegExp("^/detail/[0-9]*$");
  const isDetailPage = detailPage.test(location.pathname);
  const isAdminPage = location.pathname === "/admin" ? true : false;
  const handleClick = () => {
    !isDetailPage && !isAdminPage && navigate(`/detail/${product.id}`);
  };
  const handleAddCartItem = () => {
    addToCart(product);
  };
  const handleAdminItemDelete = () => {
    deleteProductById(product.id).then(() => populateList());
  };
  return (
    <div className="product-view-card-container">
      <img
        onClick={() => handleClick()}
        className="product-view-card-image product-view-p"
        src={product.image}
      ></img>
      <p className="product-view-card-name product-view-p">{product.name}</p>
      <p className="product-view-card-description product-view-p">
        {product.description}
      </p>
      <p className="product-view-card-price product-view-p">
        Price : ${product.price}
      </p>
      {isAdminPage && (
        <span>
          <button>Edit</button>
          <button onClick={() => handleAdminItemDelete()}>Delete</button>
        </span>
      )}
      {!isAdminPage && (
        <button onClick={(e) => handleAddCartItem()}>Add to Cart</button>
      )}
    </div>
  );
};
