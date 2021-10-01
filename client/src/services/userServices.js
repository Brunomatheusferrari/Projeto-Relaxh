import { api } from "./api";

async function reserva(email,tipo_quarto, data_entrada, data_saida, numero_pessoas){
    try {
        const res = await api.post("/users/reserve", { email,tipo_quarto, data_entrada, data_saida, numero_pessoas });

        console.log(res)
    } catch (err) {
        throw new Error("Quartos Indisponíveis");
    }
}

async function createUser(nome,email,password){
    try {
        const res = await api.post("/users/create", { nome, email, password});

        return res
    } catch (err) {
        throw new Error("Usuário já Cadastrado");
    }
}

async function getServicos(){
    try {   
        const res = await api.get("/service/getAll").data;
        
        return res
    } catch (err) {
        throw new Error(err);
    }
}

const userServices = {
    reserva,
    createUser,
    getServicos
}

export default userServices;