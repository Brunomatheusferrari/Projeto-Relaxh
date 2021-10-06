const { createContext, useContext, useState, useReducer } = require("react");

const DeliveryContext = createContext();

const initialState = {
    total: 0,
    comidas: []    
};

function reducer(prevState, action) {
    switch (action.type) {
        case "ADD_TOTAL": 

            function verify(){
                prevState.comidas.map(comida => {
                    if(comida && comida.nome === action.payload.comida.nome){
                        return {
                            ...comida,
                            quantidade: comida.quantidade + 1
                        }
                    }
                })

                return {
                    ...action.payload.comida,
                    quantidade: 1
                }
            }

            const verifyedComida = verify()
            console.log(verifyedComida)

            return {
                ...prevState,
                total: prevState.total + action.payload.preco,
                comidas: [...prevState.comidas, verifyedComida]
            }
        case "SUB_TOTAL":
            return {
                ...prevState,
                total: prevState.total - action.payload
            }
    }
}

export function DeliveryProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const deliveryActions = {
        addTotal: (preco, comida) => {
            dispatch({ type: "ADD_TOTAL", payload: { preco, comida } });
            console.log(state.comidas)
        },
        subTotal: (preco) => {
            dispatch({ type: "SUB_TOTAL", payload: preco });
        }
    }

    return (
        <DeliveryContext.Provider value={{ total: state.total, deliveryActions }}>
            {children}
        </DeliveryContext.Provider>
    );
}

export const useDelivery = () => useContext(DeliveryContext);