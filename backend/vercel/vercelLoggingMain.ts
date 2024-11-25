import { VERCEL_TOKEN } from "../globals";
import { sendEmail } from "../notifications/nodemailer";
import { getVercelErrorLogs } from "./getVercelErrorLogs";

const vercelLoggingMain = async (): Promise<[string[], string[]]> => {
  if (!VERCEL_TOKEN) {
    throw new Error("No token provided");
  }

  const [userLogs, adminLogs]: [string[], string[]] = await Promise.all([
    getVercelErrorLogs("snack-safari", VERCEL_TOKEN),
    getVercelErrorLogs("snack-safari-admin", VERCEL_TOKEN),
  ]);

  console.log(userLogs, adminLogs);

  // Email logs
  await sendEmail("dgavidia1@gmail.com", "Test", "test", userLogs[0]);
  return [userLogs, adminLogs];
};

await vercelLoggingMain();
