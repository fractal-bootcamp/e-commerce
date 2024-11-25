import type { VercelDeployment } from "../types/notifications";
import { getVercelDeployments } from "./getVercelDeployments";
import { getVercelLogs } from "./getVercelLogs";
import { getVercelLogsHTML } from "./getVercelLogsHTML";

export const getVercelFailedDeployments = async (
  projectName: string,
  vercelToken: string
): Promise<VercelDeployment[]> => {
  // Get latest deployments
  const deployments: VercelDeployment[] = await getVercelDeployments(100, projectName, vercelToken);

  // Filter for failed deployments
  const failedDeployments: VercelDeployment[] = deployments.filter((d) => d.state === "ERROR");

  // Get error logs for failed deployments
  const failedDeploymentsWithLogs: VercelDeployment[] = await Promise.all(
    failedDeployments.map(async (deployment) => ({
      ...deployment,
      logs: await getVercelLogs(deployment.uid, vercelToken),
    }))
  );

  const failedDeploymentsWithHTML: VercelDeployment[] = await Promise.all(
    failedDeploymentsWithLogs.map(async (deployment) => ({
      ...deployment,
      html: getVercelLogsHTML(deployment),
    }))
  );

  return failedDeploymentsWithHTML;
};
