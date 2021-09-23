const { createContext, useReducer, useContext } = require("react");

const RegisterContext = createContext();

const initialState = {
    email: "",
    confirmarEmail: "",
    senha: "",
    confirmarSenha: ""
};

function reducer(prevState, action) {
    switch(action.type) {
        case "CADASTRO":
            const { email, confirmarEmail, senha, confirmarSenha } = action.payload; 
            return {
                ...prevState,
                email,
                confirmarEmail,
                senha,
                confirmarSenha
            }
    }
}

export function RegisterProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <RegisterContext.Provider value={{ state, dispatch }}>
            {children}
        </RegisterContext.Provider>
    );
}

export const useRegister = () => useContext(RegisterContext);