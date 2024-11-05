import { sendMail } from "@/lib/mail";

export async function POST(request) {
  const { firstname, email, message, phonenumber } = await request.json();
  try {
    await sendMail({
      to: "nitin.acewebx@gmail.com",
      name: "Nitin",
      subject: `Client mail : ${message}`,
      body: `<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; padding: 20px; border: 1px solid #dddddd;">
                    <!-- Header -->
                    <tr>
                        <td align="center" style="padding: 20px 0;">
                            <h1 style="margin: 0; color: #333333;">Welcome to Our Service</h1>
                        </td>
                    </tr>
                    <!-- Body -->
                    <tr>
                        <td style="padding: 20px; color: #333333;">
                            <p style="margin: 0 0 10px 0;">Dear ${firstname},</p>
                            <p style="margin: 0 0 10px 0;">Thank you for signing up for our service. We're excited to have you on board. Below are user login details:</p>
                            <p style="margin: 0 0 10px 0;"><strong>Username:</strong> ${firstname}</p>
                            <p style="margin: 0 0 10px 0;"><strong>User Email:</strong> ${email}</p>
                            <p style="margin: 0 0 10px 0;"><strong>Message:</strong> ${message}</p>
                             <p style="margin: 0 0 10px 0;"><strong>Mobile No:</strong> ${phonenumber}</p>
                            <p style="margin: 0 0 10px 0;">Please let us know if you have any questions. We're here to help!</p>
                            <p style="margin: 0 0 10px 0;">Best regards,<br>Your Company</p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td align="center" style="padding: 20px 0; background-color: #f4f4f4;">
                            <p style="margin: 0; color: #999999; font-size: 12px;">© 2024 Your Company. All rights reserved.</p>
                            <p style="margin: 0; color: #999999; font-size: 12px;">1234 Street, City, Country</p>
                            <p style="margin: 0; color: #999999; font-size: 12px;">Unsubscribe</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>`,
    });

    return new Response(
      JSON.stringify({ message: "Email send successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.log("Email Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error: error.message }),
      { status: 500 }
    );
  }
}
