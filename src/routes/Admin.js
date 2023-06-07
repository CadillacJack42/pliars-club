import { ProductsList } from "../components/ProductsList";
import { AdminCreateProductForm } from "../forms/AdminCreateProductForm";
import "../css/Admin.css";

export const Admin = () => {
  return (
    <div className="admin-container">
      <ProductsList />
      <AdminCreateProductForm />
    </div>
  );
};
