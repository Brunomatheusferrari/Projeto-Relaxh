import React from "react";
import { DeliveryFoodList } from "../DeliveryFoodList";
import { Button } from "./Button";
import { Food } from "./Text";
import { Price } from "./Price";

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Counter: props.initial
        };
    }

    increment = () => {
        this.setState(state => {
            if(state.Counter !== 9){
                return { Counter: state.Counter + 1 }
            }
        });
    }

    decrement = () => {
        this.setState(state => {
            if (state.Counter !== 0) {
                return { Counter: state.Counter - 1 }
            }            
        });
    }



    render() {
        return (
            <DeliveryFoodList>
                <div className="foodList">
                    <div className="name">
                        <Food name={this.props.name} />
                    </div>

                    <div className="price">
                        <Price price={"R$"+this.props.price}/>
                    </div>

                    <div className="counter">
                        <Button legend="+" onClick={this.increment} />
                        <p className="number">{this.state.Counter}</p>
                        <Button legend="-" onClick={this.decrement} />
                    </div>
                </div>

            </DeliveryFoodList>
        )
    }
}

Counter.defaultProps = {
    initial: 0
};