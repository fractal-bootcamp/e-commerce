import axios from "axios";

export const getVercelLogs = async (
  deploymentId: string,
  vercelToken: string
): Promise<string[]> => {
  const res = await axios.request({
    method: "GET",
    url: `https://api.vercel.com/v3/deployments/${deploymentId}/events`,
    headers: {
      Authorization: `Bearer ${vercelToken}`,
    },
  });
  const data = res.data;
  const logs: string[] = data.map((d: { text: string }) => d.text);
  return logs;
};
