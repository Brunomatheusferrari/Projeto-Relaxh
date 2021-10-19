import { api } from "./api";
import jwtDecode from "jwt-decode";

async function CheckIn({token}) {
    try {
        let res = await api.post("/hotel/checkin", { token });

        const { id_reserva } = jwtDecode(token)

        const { id_quarto } = (await api.get("/users/reserve/get", {params: {"id": id_reserva}})).data

        const { numero_quarto } = (await api.get("/hotel/quartos/get", {params: {"id": id_quarto}})).data
        
       return numero_quarto
    } catch (err) {
        console.log(err);
        throw new Error("Ocorreu um Erro");
    }
}

async function CheckOut({token}) {
    try {
        const res = await api.post("/hotel/checkout", { token });
        
       return res   
    } catch (err) {
        console.log(err);
        throw new Error("Ocorreu um Erro");
    }
}

const hotelServices = {
    CheckIn,
    CheckOut
}

export default hotelServices;