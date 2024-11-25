import axios from "axios";
import type { VercelDeployment } from "../types/notifications";

export const getVercelDeployments = async (
  limit = 1,
  projectName: string,
  vercelToken: string
): Promise<VercelDeployment[]> => {
  const res = await axios.request({
    method: "GET",
    url: `https://api.vercel.com/v6/deployments?limit=${limit}`,
    headers: {
      Authorization: `Bearer ${vercelToken}`,
    },
  });
  const data = res.data.deployments;
  const twoHoursAgo = new Date(new Date().toISOString()).setHours(new Date().getUTCHours() - 2);

  const dataParsed: VercelDeployment[] = data
    .map((d: any) => ({
      uid: d.uid,
      name: d.name,
      created: new Date(d.created),
      state: d.state,
    }))
    .filter((d: VercelDeployment) => d.name === projectName && d.created.getTime() >= twoHoursAgo);
  return dataParsed;
};
