import axiosClient from "./axiosClient";

export const getAllUsers = async () => {
  const res = await axiosClient({
    method: "POST",
    url: `/user/getAllUsers`,
  });
  const data = res.data;
  return data;
};
