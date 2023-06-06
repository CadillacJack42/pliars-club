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

  console.log("RESPONSE FROM PRODUCT LIST FETCH", response);

  return response.data;
};

const productImageUpload = async (media) => {
  const response = await client.storage
    .from("product_images")
    .upload(`${media.name}`, media, {
      cacheControl: "3600",
      upsert: false,
    });
  return response;
};

export const insertProduct = async (data, media) => {
  const response = await client.from("products").insert(data);

  const imageUpload = await productImageUpload(media);

  console.log("RESPONSE FROM PRODUCT UPLOAD", response);
  console.log("IMAGE BUCKET RESPONSE FROM INSERT", imageUpload);
  return response.data;
};
