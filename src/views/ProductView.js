import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import "../css/ProductView.css";

export const ProductView = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, setCart } = useCart();
  const detailPage = new RegExp("^/detail/[0-9]*$");
  const showControls = detailPage.test(location.pathname);
  const handleClick = () => {
    navigate(`/detail/${product.id}`);
  };
  const handleAddCartItem = () => {
    setCart([...cart, product]);
  };
  return (
    <div className="product-view-card-container" onClick={() => handleClick()}>
      <img
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
      {location.pathname === "/admin" && (
        <span>
          <button>Edit</button>
          <button>Delete</button>
        </span>
      )}
      {showControls && (
        <button onClick={(e) => handleAddCartItem()}>Add to Cart</button>
      )}
    </div>
  );
};
