import { VERCEL_TOKEN } from "../globals";
import { sendEmail } from "../notifications/nodemailer";
import type { VercelDeployment } from "../types/notifications";
import { getVercelFailedDeployments } from "./getVercelFailedDeployments";

const vercelLoggingMain = async (): Promise<void> => {
  if (!VERCEL_TOKEN) {
    throw new Error("No token provided");
  }

  const [userDeployments, adminDeployments]: [VercelDeployment[], VercelDeployment[]] =
    await Promise.all([
      getVercelFailedDeployments("snack-safari", VERCEL_TOKEN),
      getVercelFailedDeployments("snack-safari-admin", VERCEL_TOKEN),
    ]);

  // Email logs
  // await sendEmail("dgavidia1@gmail.com", "Test", "test", userLogs[0]);
  // return [userDeployments, admin];
};

await vercelLoggingMain();
