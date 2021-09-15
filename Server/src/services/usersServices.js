const createHttpError = require("http-errors")
const { Usuario, Quarto, Reserva } = require("../db/models");
const nodemail = require("nodemailer")
const QRCode = require('qrcode');
const jwt = require("jsonwebtoken");

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

async function getUser(email) {
    return await Usuario.findOne({
        where: {
            email
        }
    })
}

async function getRoom(tipoQuarto) {
    return await Quarto.findOne({
        where: {
            disponibilidade: true,
            tipo_quarto: tipoQuarto
        }
    })
}

async function createReserva(usuario, quarto, data_entrada, data_saida) {
    return await Reserva.create({
        tipo_quarto: quarto.tipo_quarto,
        numero_pessoas: quarto.numero_pessoas,
        numero_quarto: quarto.numero_quarto,
        data_entrada: data_entrada,
        data_saida: data_saida,
        id_usuario: usuario.id,
        id_quarto: quarto.id
    })
}

function generateToken(data, reserva){

    return jwt.sign({ 
        id_reserva: reserva.id
    }, process.env.TOKEN_SECRET, {
        expiresIn: data
    });

}

async function reserve(InfoReserva) {
    const { email, tipo_quarto, numero_pessoas, data_entrada, data_saida } = InfoReserva
    
    const user = await getUser(email)

    if (!user) {
        throw new createHttpError(404, "User not Found");
    }

    const quarto = await getRoom(tipo_quarto)

    if (!quarto) {
        throw new createHttpError(404, "Não há quaros disponiveis");
    }

    //Reservando o Quarto
    quarto.disponibilidade = false,
        quarto.numero_pessoas = numero_pessoas,
        await quarto.save()

    const reserva = await createReserva(user, quarto, data_entrada, data_saida)

    const token = generateToken(data_entrada, reserva)

    // const text = `Dono da Reserva: ${user.email}\nQuarto: ${reserva.numero_quarto}\nNúmero de Pessoas: ${reserva.numero_pessoas}`

    // qrCode(user)

    // sendEmail(usuario.email, text)
}

async function quartos(infoQuarto) {
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