import { getVercelDeployments } from "./getVercelDeployments";
import { getVercelLogs } from "./getVercelLogs";

export const getVercelErrorLogs = async (projectName: string, vercelToken: string) => {
  // Get latest deployments
  const deployments = await getVercelDeployments(100, projectName, vercelToken);

  // Filter for failed deployments
  const failedDeployments = deployments.filter((d: any) => d.state === "ERROR");

  // Get error logs for failed deployments
  const errorLogs = Promise.all(
    failedDeployments.map((deployment: any) => getVercelLogs(deployment.uid, vercelToken))
  );

  return errorLogs;
};
