import { getVercelDeployments } from "./getVercelDeployments";
import { getVercelLogs } from "./getVercelLogs";
import { getVercelLogsFormatted } from "./getVercelLogsFormatted";

export const getVercelErrorLogs = async (
  projectName: string,
  vercelToken: string
): Promise<string[]> => {
  // Get latest deployments
  const deployments = await getVercelDeployments(100, projectName, vercelToken);

  // Filter for failed deployments
  const failedDeployments = deployments.filter((d: any) => d.state === "ERROR");

  // Get error logs for failed deployments
  const errorLogs: string[] = await Promise.all(
    failedDeployments.map((deployment: any) => getVercelLogs(deployment.uid, vercelToken))
  );

  // Format logs
  const errorLogsFormatted: string[] = errorLogs.map((logs) => getVercelLogsFormatted(logs));

  return errorLogsFormatted;
};
