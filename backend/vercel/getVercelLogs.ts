import axios from "axios";

export const getVercelLogs = async (deploymentId: string, vercelToken: string) => {
  const res = await axios.request({
    method: "GET",
    url: `https://api.vercel.com/v3/deployments/${deploymentId}/events`,
    headers: {
      Authorization: `Bearer ${vercelToken}`,
    },
  });
  const data = res.data;
  const dataParsed: string[] = data.map((d: { text: string }) => d.text);
  const logs = dataParsed.join("\n");
  return logs;
};

// 10 minutes after syncing with upstream
// Get 100 latest vercel deployments for each repo ()
// Filter by those that had errors
// For those that had errors, pull their build steps
// Merge build steps into long string
// Send string over email
