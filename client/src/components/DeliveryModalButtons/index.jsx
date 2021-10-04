import React, { useState } from "react";
import { DeliveryFoodList } from "../DeliveryFoodList";
import { Button } from "./Button";
import { Food } from "./Text";
import { Price } from "../DeliveryPrices/Price";
import { useDelivery } from "../../contexts/deliveryContext";

export function Counter(props) {
    const [counter, setCounter] = useState(0);
    const { deliveryActions } = useDelivery();    

    function increment() {
        if(counter !== 20) {
            setCounter(counter => counter + 1);                
            deliveryActions.addTotal(props.price);
        };        
    }

    function decrement() {
        if (counter !== 0) {
            setCounter(counter => counter - 1);                
            deliveryActions.subTotal(props.price);
        }
    }

    return (
        <DeliveryFoodList>
            <div className="foodList">
                <div className="name">
                    <Food name={props.name} />
                </div>

                <div className="price">
                    <Price price={"R$"+props.price}/>
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