const nodemailer = require('nodemailer');
const config = require('./gmail-config');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.user,
    pass: config.pass
  }
});

const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: config.user,
    to: to,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email enviado a: ${to}`);
    }
  });
};

// Ejemplo de envío de correo electrónico
sendEmail('galindezjavier89@gmail.com', 'Alerta de Stock', 'El stock del producto está por debajo del mínimo establecido. Por favor, reponerlo.');

