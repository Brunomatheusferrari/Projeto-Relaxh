import userServices from "../services/userServices";
const { createContext, useReducer, useContext } = require("react");

const RegisterContext = createContext();

const initialState = {
    email: "",
    password: "",
    data_entrada: "",
    data_saida: "",
    tipo_quarto: "",
    numero_pessoas: ""
};

function reducer(prevState, action) {
    switch(action.type) {
        case "CADASTRO":
            const { email, password} = action.payload; 
            return {
                ...prevState,
                email,
                password
            }
        case "RESERVA": 
            const {data_entrada, data_saida, tipo_quarto, numero_pessoas} = action.payload;
            return {
                ...prevState,
                data_entrada, 
                data_saida, 
                tipo_quarto, 
                numero_pessoas
            }
    }
}

export function RegisterProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const nome = "Paulo"

    
    async function registerUser() {
        const { email, password } = state;
        try {
            const res = await userServices.createUser(nome,email,password) 

            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    async function createReserva(){
        const { email, data_entrada, data_saida, tipo_quarto, numero_pessoas } = state;
        try {
            const res = await userServices.reserva(email, data_entrada, data_saida, tipo_quarto, numero_pessoas) 

            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <RegisterContext.Provider value={{ state, dispatch, registerUser, createReserva}}>
            {children}
        </RegisterContext.Provider>
    );
}

export const useRegister = () => useContext(RegisterContext);