const createHttpError = require("http-errors");
const { Servico, Quarto } = require("../db/models");

async function register(serviceInfo){
    const {descricao, horario , tipo, id_quarto} = serviceInfo

    const {numero_quarto} = await Quarto.findOne({
        where: {
            id: id_quarto
        }
    })

    const servico = await Servico.create({
        descricao,
        numero_quarto,
        horario,
        tipo,
        id_quarto
    })

    return "Serviço Cadastrado"
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


module.exports = {
    register,
    getAll,
    deleteService
};