let nodemailer = require("nodemailer");

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  require("dotenv").config();

  const password = process.env.password;
  const mail = process.env.mail;
  const sendto = process.env.sendto;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "regalis.dummycontact@gmail.com",
      pass: password,
    },
    secure: true,
  });

  const mailData = {
    from: mail,
    to: sendto,
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<h1><strong>You have a new contact form submission </strong></h1><br>
       <p><strong>Name: </strong> ${req.body.name} </p>
       <p><strong> Email: </strong> ${req.body.email}</p>
       <p><strong>Message: </strong> ${req.body.message} </p><br>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200).json({ message: "Message Sent" });
}
