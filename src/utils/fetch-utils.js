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

export const getProductById = async (id) => {
  const response = await client
    .from("products")
    .select("*")
    .match({ id })
    .single();
  return response.data;
};

const productImageUpload = async (media) => {
  const response = await client.storage
    .from("product_images")
    .upload(`${media.name}`, media, {
      cacheControl: "3600",
      upsert: true,
    });
  return response;
};

export const insertProduct = async (data, media) => {
  const response = await client.from("products").insert(data);

  const imageUpload = await productImageUpload(media);

  console.log("RESPONSE FROM PRODUCT INSERT", response);
  console.log("IMAGE BUCKET RESPONSE FROM INSERT", imageUpload);
  return response.data;
};

export const deleteProductById = async (id) => {
  const response = await client.from("products").delete().match({ id });
  console.log("RESPONSE FROM DELETE PRODUCT", response);
};
