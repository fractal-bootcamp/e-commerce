import axios from "axios";

export const getVercelDeployments = async (limit = 1, projectName: string, vercelToken: string) => {
  const res = await axios.request({
    method: "GET",
    url: `https://api.vercel.com/v6/deployments?limit=${limit}`,
    headers: {
      Authorization: `Bearer ${vercelToken}`,
    },
  });
  const data = res.data.deployments;
  const dataParsed = data.filter((d: any) => d.name === projectName);
  return dataParsed;
};
