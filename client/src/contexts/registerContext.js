import userServices from "../services/userServices";
import authServices from "../services/authServices"
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

function toTimestamp(strDate){
    var datum = Date.parse(strDate);
    return datum/1000;
 }

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

    async function registerUser(nome,email, password){    
        try {  
            const res = await userServices.createUser(nome,email,password)

            if(!res) {
                console.log("Usuário Não Criado")
            }
            
            dispatch({ type: "CADASTRO", payload: {email, password} })
        } catch (error) {
            console.log(error)
        }
    }

    async function createReserva(){
        let { email, tipo_quarto, data_entrada, data_saida, numero_pessoas } = state;

        try {
            if(email === ''){
                let { data } = await authServices.getUser()
                email = data.email
            }
    
            const res = await userServices.reserva(email, tipo_quarto, toTimestamp(data_entrada), toTimestamp(data_saida), numero_pessoas) 
            
            return res
        } catch (error) {
            console.log(error)
        }
    }

    async function signIn(){
        const { email, password } = state
        try {
            const res = await authServices.signIn(email,password)

            return res
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <RegisterContext.Provider value={{ state, dispatch, registerUser, createReserva, signIn}}>
            {children}
        </RegisterContext.Provider>
    );
}

export const useRegister = () => useContext(RegisterContext);