import authServices from "../services/authServices";
import serviceServices from "../services/serviceServices";

/* eslint-disable default-case */
const { createContext, useContext, useState, useReducer } = require("react");

const DeliveryContext = createContext();

const initialState = {
    total: 0,
    comidas: []    
};

function reducer(prevState, action) {
    switch (action.type) {
        case "ADD_TOTAL": 

            // function isDuplicado(newComida){
            //     return prevState.comidas.find( comida => comida.id === newComida.id)
            // }

            // if(!isDuplicado(action.payload.comida)){
            //     return {
            //         ...prevState,
            //         total: prevState.total + action.payload.preco,
            //         comidas: [...prevState.comidas, {...action.payload.comida, quantidade: 1}]
            //     }
            // }

            prevState.comidas.forEach((comida, index) => {
                if(comida.id === action.payload.comida.id){
                    prevState.comidas[index].quantidade = prevState.comidas[index].quantidade + 1
                } 
            })

            let exists = prevState.comidas.find(comida => comida.id === action.payload.comida.id)

            if(!exists){
                prevState.comidas.push({...action.payload.comida, quantidade: 1})
            }

            // const newVetor = prevState.comidas.map( comida => {
            //     if(action.payload.comida.id === comida.id){
            //         return {
            //             ...comida,
            //             quantidade: comida.quantidade + 1
            //         }
            //     }
            // })

            return {
                ...prevState,
                total: prevState.total + action.payload.preco
            }   

        case "SUB_TOTAL":
            return {
                ...prevState,
                total: prevState.total - action.payload
            }

        case "CLEAN":
            return{
                ...prevState,
                comidas: []
            }
    }
}

export function DeliveryProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const deliveryActions = {
        addTotal: (preco, comida) => {
            dispatch({ type: "ADD_TOTAL", payload: { preco, comida } });
        },
        subTotal: (preco) => {
            dispatch({ type: "SUB_TOTAL", payload: preco });
        },
        postPedido: async () => {
            const quarto = await serviceServices.getQuartoUser()
            console.log(quarto)
            serviceServices.postServico({id_quarto: quarto.id,tipo: "Delivery", comidas: state.comidas})
            dispatch({type: "CLEAN"})
        }
    }

    return (
        <DeliveryContext.Provider value={{ total: state.total, deliveryActions }}>
            {children}
        </DeliveryContext.Provider>
    );
}

export const useDelivery = () => useContext(DeliveryContext);