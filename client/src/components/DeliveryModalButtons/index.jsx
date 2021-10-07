import React, { useState } from "react";
import { DeliveryFoodList } from "../DeliveryFoodList";
import { Button } from "./Button";
import { Food } from "./Text";
import { Price } from "../DeliveryPrices/Price";
import { useDelivery } from "../../contexts/deliveryContext";

export function Counter(props) {
    const { nome, preco } = props.comida
    const [counter, setCounter] = useState(0);
    const { deliveryActions } = useDelivery();    

    function increment() {
        if(counter !== 20) {
            setCounter(counter => counter + 1);             
            deliveryActions.addTotal(preco, props.comida);
        };        
    }

    function decrement() {
        if (counter !== 0) {
            setCounter(counter => counter - 1);                
            deliveryActions.subTotal(preco, props.comida);
        }
    }

    return (
        <DeliveryFoodList>
            <div className="foodList">
                <div className="name">
                    <Food name={nome} />
                </div>

                <div className="price">
                    <Price price={"R$"+ preco}/>
                </div>

                <div className="counter">
                    <Button legend="+" onClick={increment} />
                    <p className="number">{counter}</p>
                    <Button legend="-" onClick={decrement} />
                </div>
            </div>
        </DeliveryFoodList>
    )
}