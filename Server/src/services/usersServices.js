const createHttpError = require("http-errors")
const { Usuario, Quarto, Reserva } = require("../db/models");
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

async function sendEmail(email, texto) {
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
        text: texto
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

    if(!user){
        throw new createHttpError(409, "User not Found");
    }

    const quarto = await Quarto.findOne({
        where: {
            disponibilidade: true
        }
    })

    quarto.disponibilidade = false
    quarto.numero_pessoas = 4
    await quarto.save()

    const reserva = await Reserva.create({
        tipo_quarto: quarto.tipo_quarto,
        numero_pessoas: 4,
        numero_quarto: quarto.numero_quarto,
        id_usuario: user.id,
        id_quarto: quarto.id
    })

    const text = `Dono da Reserva: ${user.email}\nQuarto: ${reserva.numero_quarto}\nNúmero de Pessoas: ${reserva.numero_pessoas}`
    
    
    /**
     * TODO
     */
    // qrCode(user)

    sendEmail(usuario.email, text)
}

async function quartos(infoQuarto){
    const { tipo_quarto, numero_quarto } = infoQuarto

    Quarto.create({
        numero_quarto: numero_quarto,
        tipo_quarto: tipo_quarto
    })
}

module.exports = {
    createUser,
    reserve,
    qrCode,
    quartos
};