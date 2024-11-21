import axiosClient from "./axiosClient";

export const getAllProducts = async () => {
  const res = await axiosClient({
    method: "POST",
    url: `/product/getAllProducts`,
  });
  const data = res.data;
  return data;
};
