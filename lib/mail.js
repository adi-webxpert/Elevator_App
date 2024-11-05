import nodemailer from 'nodemailer';

export async function sendMail({ to, subject, name, body }) {
  const smtpPassword = process.env.SMTP_PASS;
  const smtpMail = process.env.SMTP_EMAIL;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: smtpMail,
      pass: smtpPassword,
    },
  });

  try {
    await transport.verify();
    console.log("SMTP server is ready to take our messages");
  } catch (error) {
    console.log("Error verifying SMTP configuration:", error);
    return;  // Exit the function if verification fails
  }

  try {
    const sendResult = await transport.sendMail({
      from: smtpMail,
      to,
      subject,
      html: body,
    });
    console.log("Email send successfully:", sendResult);
  } catch (error) {
    console.log("Error sending email:", error);
  }
}
