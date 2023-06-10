import { useContext } from "react";
import { AdminContext } from "../context/AdminProvider";

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === null) {
    throw new Error("Admin context must come from AdminProvider");
  }
  return context;
};
