const nodemailer = require("nodemailer");
const sendGridTransport = require("nodemailer-sendgrid-transport");

//transport
const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  }),
);

const sendEmailController = (req, res) => {
  try {
    const { name, email, msg } = req.body;

    //validation
    if (!name || !email || !msg) {
      return res.status(500).send({
        sucess: false,
        message: "Please fill All Fields",
      });
    }

    //email matter
    transporter.sendMail({
      to: "skniru19@gmail.com",
      from: "skniru19@gmail.com",
      subject: "Regarding Portfolio App",
      html: `
          <h5> Detail Information</h5>
          <ul>
          <li><p>Name : ${name}</p></li>
          <li><p>Email : ${email}</p></li>
          <li><p>Message : ${msg}</p></li>
          </ul>
          `,
    });

    return res.status(200).send({
      success: true,
      message: "Your message send sucessesfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "send Email API error",
      error,
    });
  }
};

module.exports = { sendEmailController };
