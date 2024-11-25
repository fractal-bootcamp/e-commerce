import { NODEMAILER_EMAIL_PASSWORD, NODEMAILER_EMAIL_USER, VERCEL_TOKEN } from "../globals";
import { sendEmail } from "../notifications/nodemailer";
import type { VercelDeployment } from "../types/notifications";
import { getVercelFailedDeployments } from "./getVercelFailedDeployments";

const emailRecipients = [
  "dgavidia1@gmail.com",
  "malin.kankanamge@gmail.com",
  "aadityadesai09@gmail.com",
];

const vercelLoggingMain = async (): Promise<void> => {
  if (!VERCEL_TOKEN) {
    throw new Error("No token provided");
  }

  const [userDeployments, adminDeployments]: [VercelDeployment[], VercelDeployment[]] =
    await Promise.all([
      getVercelFailedDeployments("snack-safari", VERCEL_TOKEN),
      getVercelFailedDeployments("snack-safari-admin", VERCEL_TOKEN),
    ]);

  const allDeployments = [...userDeployments, ...adminDeployments];
  console.log(NODEMAILER_EMAIL_PASSWORD);
  console.log(NODEMAILER_EMAIL_USER);

  await Promise.all(
    emailRecipients.flatMap((recipient) =>
      allDeployments.map((deployment) =>
        sendEmail(
          recipient,
          `Vercel Deployment Error: ${deployment.name}, ${deployment.created.toISOString()}`,
          undefined,
          deployment.html
        )
      )
    )
  );
};

await vercelLoggingMain();
