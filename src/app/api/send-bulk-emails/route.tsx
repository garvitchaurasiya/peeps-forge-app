export const dynamic = "force-static";
import nodemailer from 'nodemailer';

export async function POST(request: Request) {

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: "garvitchaurasiya2525@gmail.com",
      pass: "oaetatrvawvbohus",
    },
  });

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'garvitchaurasiya2525@gmail.com', // sender address
      to: "igarvitchaurasiya@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }

  
  try {
    await main();
    return new Response("Success!", {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, {
      status: 500,
    });
  }
}
