import nodemailer from "nodemailer";

export default async function (req, res) {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_SENDER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    const mailData = {
      from: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Message from ${name}, Subject: ${subject}`,
      text: message + " | Sent from: " + email,
      html: `<div>${message}</div><a href=mailto:${email}?subject=Responding+to+your+inquiry>RESPOND</a>`,
    };

    await transporter.sendMail(mailData);
    res.status(200).send({ data: "ok" });
  } catch (err) {
    res.status(500).error(err);
  }
}
