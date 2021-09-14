const createHttpError = require("http-errors")
const { Usuario } = require("../db/models");
const nodemail = require("nodemailer")
const QRCode = require('qrcode')

async function createUser(user) {
    const [newUser, created] = await Usuario.findOrCreate({
        where: {
            email: user.email
        },
        defaults: {
            ...user,
        }
    });

    if (!created) {
        throw new createHttpError(409, "E-mail already registered");
    }

    return newUser;
}

async function sendEmail(email) {
    const transporter = nodemail.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    const emailText = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Teste",
        text: "Apenas um email de teste"
    }

    await transporter.sendMail(emailText, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("E-mail Enviado")
            console.log(info);
        }
    })
}

async function qrCode(reserveInfo) {
    await QRCode.toString(`email: ${reserveInfo.email}`, function (err, string) {
        if (err) throw err
        return string
    })
}

async function reserve(usuario) {
    const user = await Usuario.findOne({
        where: {
            email: usuario.email
        }
    })
    qrCode(user)

    sendEmail(user.email)
}

module.exports = {
    createUser,
    reserve,
    qrCode
};