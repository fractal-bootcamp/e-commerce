import axiosClient from "./axiosClient";

export const getAllProducts = async () => {
  const res = await axiosClient({
    method: "POST",
    url: `/product/getAllProducts`,
  });
  const data = res.data;
  return data;
};

export const getProductsFromCountry = async (country: string) => {
  const res = await axiosClient({
    method: "POST",
    url: `/product/getProductsFromCountry`,
    data: {
      country: country,
    },
  });
  const data = res.data;
  return data;
};

export const getProduct = async (productId: string) => {
  const res = await axiosClient({
    method: "POST",
    url: `/product/getProduct`,
    data: {
      productId: productId,
    },
  });
  const data = res.data;
  return data;
};
