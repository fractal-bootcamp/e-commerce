import type { VercelDeployment } from "../types/notifications";

export const getVercelLogsHTML = (vercelDeployment: VercelDeployment): string => {
  const deploymentInfo = `
    <div style="margin-bottom: 16px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Deployment ID:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${vercelDeployment.uid}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Project:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${vercelDeployment.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Created:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${vercelDeployment.created.toLocaleString()}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Status:</strong></td>
          <td style="padding: 8px; border-bottom: 1px solid #eee;">${vercelDeployment.state}</td>
        </tr>
      </table>
    </div>
  `;

  const logSection = vercelDeployment.logs?.length
    ? `
    <div style="background: #f5f5f5; border-radius: 8px; padding: 16px; margin: 16px 0;">
      <h3 style="margin: 0 0 12px; color: #333;">Deployment Logs</h3>
      <ul style="list-style: none; margin: 0; padding: 0;">
        ${vercelDeployment.logs
          .map(
            (log) => `<li style="font-family: monospace; padding: 4px 0; color: #666;">${log}</li>`
          )
          .join("")}
      </ul>
    </div>
  `
    : "";

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
      ${deploymentInfo}
      ${logSection}
    </div>
  `;
};
