import axiosClient from "./axiosClient";

export const ragQuery = async (query: string) => {
  const res = await axiosClient({
    method: "POST",
    url: `/rag/ragQuery`,
    data: {
      query: query,
    },
  });
  const data = res.data;
  return data;
};
