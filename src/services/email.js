const nodemailer = require("nodemailer");

class EmailManager {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      port: 587,
      auth: {
        user: "paula.tf96@gmail.com",
        pass: "dmoz ljtb gdhb rkcq",
      },
    });
  }

  async sendEmailPurchase(email, first_name, ticket) {
    try {
      const mailOptions = {
        from: "Atenea Ecommerce <paula.tf96@gmail.com>",
        to: email,
        subject: "Confirmación de compra",
        html: `<h1>Confirmación de compra</h1>
                        <p>Gracias por tu compra, ${first_name}!</p>
                        <p>El ID de su orden es: ${ticket}!</p>`,
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error enviando el correo electrónico:", error);
    }
  }

  async sendResetEmail(email, token) {
    try {
      const mailOptions = {
        from: "Atenea Ecommerce <paula.tf96@gmail.com>",
        to: email,
        subject: "Recuperación de contraseña",
        html: `
        <p> ¡Hola! Solicitaste una nueva contraseña</p>
        <strong> ${token} </strong>
        <p> Este código expira en una hora, ingrésalo en el siguiente enlace </p>
        <a href="http://localhost:8080/changepassword"> Restablecer Contraseña </a>
        `,
      };

      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error("Error enviando el correo electrónico:", error);
    }
  }
}

module.exports = EmailManager;
