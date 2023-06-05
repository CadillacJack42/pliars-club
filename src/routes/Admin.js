import { AdminCreateProductForm } from "../forms/AdminCreateProductForm";

export const Admin = () => {
  return (
    <div>
      <h1>Admin Page</h1>
      <p>Form to add or delete products</p>
      <AdminCreateProductForm />
      <p>This page should be password protected</p>
    </div>
  );
};
