import "../css/ProductView.css";

export const ProductView = ({ product }) => {
  return (
    <div className="product-view-card-container">
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
    </div>
  );
};
