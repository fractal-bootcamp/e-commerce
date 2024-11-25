import nodemailer from "nodemailer";
import { NODEMAILER_EMAIL_PASSWORD, NODEMAILER_EMAIL_USER } from "../globals";

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  html?: string
): Promise<void> => {
  // Create a transporter with your email service credentials
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: NODEMAILER_EMAIL_USER,
      pass: NODEMAILER_EMAIL_PASSWORD,
    },
    logger: true,
    debug: true,
  });

  // Define the email options
  const mailOptions = {
    from: NODEMAILER_EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
