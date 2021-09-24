import { api } from "./api";

async function reserva(email,tipo_quarto, data_entrada, data_saida, numero_pessoas){
    try {
        const res = await api.post("/reserve", { email,tipo_quarto, data_entrada, data_saida, numero_pessoas });

        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

async function createUser(nome,email,password){
    try {
        const res = await api.post("/users/create", { nome, email, password});

        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

const userServices = {
    reserva,
    createUser
}

export default userServices;