import { createContext, useState, useEffect } from "react";
import { authListener, fetchAdmin } from "../utils/fetch-utils";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  // CALL SUPABASE AUTH EVENT LISTENER
  authListener();

  // Try to fetch current Admin
  let currAdmin;
  try {
    fetchAdmin().then((user) => setAdmin(user));
  } catch (error) {
    console.log("ERROR FROM NO ADMIN", error);
  }

  const [admin, setAdmin] = useState({});

  useEffect(() => {
    console.log("ADMIN IN PROVIDER", admin);
  }, [admin]);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
