import axiosClient from "./axiosClient";

export const addOrder = async (
  auth0Id: string,
  total: number,
  orderStatus: string,
  productIds: string[]
) => {
  const res = await axiosClient({
    method: "POST",
    url: `/order/addOrder`,
    data: {
      auth0Id: auth0Id,
      total: total,
      orderStatus: orderStatus,
      productIds: productIds,
    },
  });
  const data = res.data;
  return data;
};
