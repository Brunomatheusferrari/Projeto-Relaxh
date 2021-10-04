const { createContext, useContext, useState, useReducer } = require("react");

const DeliveryContext = createContext();

const initialState = {
    total: 0,
    pedido: null,
    pedidos: []
};

function reducer(prevState, action) {
    switch (action.type) {
        case "ADD_TOTAL":             
            return {
                ...prevState,
                total: prevState.total + action.payload
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
        addTotal: (price) => {
            dispatch({ type: "ADD_TOTAL", payload: price });
        },
        subTotal: (price) => {
            dispatch({ type: "SUB_TOTAL", payload: price });
        },
    }

    return (
        <DeliveryContext.Provider value={{ total: state.total, deliveryActions }}>
            {children}
        </DeliveryContext.Provider>
    );
}

export const useDelivery = () => useContext(DeliveryContext);