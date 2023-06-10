import "../css/Admin.css";
import { Tabs } from "../components/Tabs";
import { Orders } from "../components/Orders";
import { ProductsList } from "../components/ProductsList";
import { CreateNewAdminForm } from "../forms/CreateNewAdminForm";
import { AdminCreateProductForm } from "../forms/AdminCreateProductForm";
import { logout } from "../utils/fetch-utils";

export const Admin = () => {
  const admin = {
    tabs: [
      "Product List",
      "Create New Product",
      "Add Admin",
      "Orders",
      "LogOut",
    ],
    content: [
      <ProductsList />,
      <AdminCreateProductForm />,
      <CreateNewAdminForm />,
      <Orders />,
      <button onClick={() => logout()}>LogOut</button>,
    ],
  };
  return (
    <div className="admin-container">
      <Tabs page={admin} />
    </div>
  );
};
