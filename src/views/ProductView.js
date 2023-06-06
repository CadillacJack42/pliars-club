import { useLocation, useNavigate } from "react-router-dom";
import "../css/ProductView.css";

export const ProductView = ({ product }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${product.id}`);
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
      {location.pathname === "/admin" ? (
        <span>
          <button>Edit</button>
          <button>Delete</button>
        </span>
      ) : null}
    </div>
  );
};
