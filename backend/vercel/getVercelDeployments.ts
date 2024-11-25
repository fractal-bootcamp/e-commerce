import axios from "axios";

export const getVercelDeployments = async (limit = 1, vercelToken: string) => {
  const res = await axios.request({
    method: "GET",
    url: `http://api.vercel/com/v6/deployments?limit=${limit}`,
    headers: {
      Authorization: `Bearer ${vercelToken}`,
    },
  });
  const data = res.data.deployments;
  return data;
};
