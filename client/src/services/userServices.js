import { api } from "./api";

async function reserva(email,tipo_quarto, data_entrada, data_saida, numero_pessoas){
    console.log(email,tipo_quarto, data_entrada, data_saida, numero_pessoas)
    try {
        const res = await api.post("/users/reserve", { email,tipo_quarto, data_entrada, data_saida, numero_pessoas });

        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

async function createUser(nome,email,password){
    try {
        const res = await api.post("/users/create", { nome, email, password});

        return res
    } catch (err) {
        console.log(err)
        return err
    }
}

const userServices = {
    reserva,
    createUser
}

export default userServices;