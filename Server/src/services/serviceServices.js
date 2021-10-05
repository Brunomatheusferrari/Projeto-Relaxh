const createHttpError = require("http-errors");
const { Servico, Quarto, Comida, Usuario, Reserva, Comida_Servico} = require("../db/models");

async function register(serviceInfo){
    const {comidas, tipo, horario, descricao, id_quarto} = serviceInfo

    const idComidas = comidas.map(comida => comida.id)

    const comidasDb = await Comida.findAll({
        where: {
            id: idComidas
        }
    });

    const servico = await Servico.create({
        tipo,
        horario,
        descricao,
        id_quarto,
    })

    const vetorServicos = comidas.map(comida => ({comida_id: comida.id, servico_id: servico.id,quantidade: comida.quantidade}))

    return await Comida_Servico.createBulk(vetorServicos, {returning: true})
}

async function getAll(){
    return await Servico.findAll()
}

async function deleteService({id}){
    const servico = await Servico.findOne({
        where: {
            id
        }
    })

    if(!servico){
        throw new createHttpError(404, "Sevice not found");
    }

    await servico.destroy()
}

async function postComida(info){
    const { tipo, preco, nome} = info

    return await Comida.create({
        tipo,
        preco,
        nome
    })
}

async function getAllComidas(){
    return await Comida.findAll()
}

async function getQuartoFromUser({id}){
    try {
        const user = await Usuario.findOne({
            where: {
                id
            }
        })

        if(!user){
            throw new Error("Usuário não encontrado")
        }

        const reserva = await Reserva.findOne({
            where: {
                id_usuario: user.id
            }
        })

        if(!reserva){
            throw new Error("Reserva com este usuário não encontrada")
        }

        return await Quarto.findOne({
            where: {
                id: reserva.id_quarto
            }
        })
    } catch (error) {
        console.log(error)
    }
}

async function getServicosUser({id}){
    return await Servico.findAll({
        where:{
            id_quarto: id
        },
        include: "comidas"
    });
}

async function getComida({id}){
    return await Comida.findOne({
        where: {
            id
        }
    })
}

module.exports = {
    register,
    getAll,
    deleteService,
    postComida,
    getAllComidas,
    getQuartoFromUser,
    getServicosUser,
    getComida
};