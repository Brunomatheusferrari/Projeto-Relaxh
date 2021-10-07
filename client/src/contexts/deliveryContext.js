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

            prevState.comidas.forEach((comida, index) => {
                if(comida.id === action.payload.comida.id){
                    prevState.comidas[index].quantidade = action.payload.counter
                } 
            })

            let exists = prevState.comidas.find(comida => comida.id === action.payload.comida.id)

            if(!exists){
                prevState.comidas.push({...action.payload.comida, quantidade: action.payload.counter})
            }

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

    async function sendPedido(){
        try {
            const quarto = await serviceServices.getQuartoUser()
            await serviceServices.postServico({id_quarto: quarto.id,tipo: "Delivery", comidas: state.comidas})
            dispatch({type: "CLEAN"})
            // return window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    const deliveryActions = {
        addTotal: (preco, comida, counter) => {
            dispatch({ type: "ADD_TOTAL", payload: { preco, comida, counter } });
        },
        subTotal: (preco) => {
            dispatch({ type: "SUB_TOTAL", payload: preco });
        },
        postPedido: () => {
            console.log(state.comidas)
            sendPedido()
        }
    }

    return (
        <DeliveryContext.Provider value={{ total: state.total, deliveryActions }}>
            {children}
        </DeliveryContext.Provider>
    );
}

export const useDelivery = () => useContext(DeliveryContext);