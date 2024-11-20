import axiosClient from "./axiosClient";

export const getAllOrders = async () => {
  console.log("started");
  const res = await axiosClient({
    method: "POST",
    url: `/order/getAllOrders`,
  });
  const data = res.data;
  return data;
};

export const getOrder = async (orderId: string) => {
  const res = await axiosClient({
    method: "POST",
    url: `/order/getOrder`,
    data: {
      orderId: orderId,
    },
  });
  const data = res.data;
  return data;
};

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

export const updateOrder = async (
  orderId: string,
  auth0Id: string,
  total: number,
  orderStatus: string
) => {
  const res = await axiosClient({
    method: "POST",
    url: `/order/updateOrder`,
    data: {
      orderId: orderId,
      auth0Id: auth0Id,
      total: total,
      orderStatus: orderStatus,
    },
  });
  const data = res.data;
  return data;
};

export const deleteOrder = async (orderId: string) => {
  const res = await axiosClient({
    method: "POST",
    url: `/order/deleteOrder`,
    data: {
      orderId: orderId,
    },
  });
  const data = res.data;
  return data;
};

export const updateOrderProducts = async (
  orderId: string,
  productIds: string[],
  action: "set" | "add" | "remove"
) => {
  const res = await axiosClient({
    method: "POST",
    url: `/order/updateOrderProducts`,
    data: {
      orderId,
      productIds: productIds,
      action: action,
    },
  });
  const data = res.data;
  return data;
};
