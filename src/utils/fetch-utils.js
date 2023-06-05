import { client } from "../services/client";

export const signup = async (email, password) => {
  const response = await client.auth.signUp({ email, password });
  return response.user;
};

export const signin = async (email, password) => {
  const response = await client.auth.signIn({ email, password });
  return response.user;
};

export const logout = async () => {
  await client.auth.signOut();
};

export const getProducts = async () => {
  const response = await client
    .from("products")
    .select("*")
    .order("created_at", { ascending: false });

  return response.data;
};

export const insertProduct = async (name, type, description, image) => {
  const response = await client
    .from("products")
    .insert({ name, type, description, image });
  return response.data;
};
