import axiosClient from "./axiosClient";

export const addOrder = async (auth0Id: string, total: number, orderStatus: string) => {
  const res = await axiosClient({
    method: "POST",
    url: `/order/addOrder`,
    data: {
      auth0Id: auth0Id,
      total: total,
      orderStatus: orderStatus,
    },
  });
  const data = res.data;
  return data;
};
