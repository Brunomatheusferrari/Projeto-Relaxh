import React from "react";
import { DeliveryFoodList } from "../DeliveryFoodList";
import { Button } from "./Button";
import { Food } from "./Text";
import { Price } from "../DeliveryPrices/Price";

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            currentValue: this.props.price
        };
    }

    increment = () => {
        if(this.state.counter !== 9) {
            this.setState(state => ({ counter: state.counter + 1 }));                
            this.props.changeTotal(prevTotal => prevTotal + this.props.price);
        };        
    }

    decrement = () => {
        if (this.state.counter !== 0) {
            this.setState(state => ({ counter: state.counter - 1 }));                
            this.props.changeTotal(prevTotal => prevTotal - this.props.price);
        }
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
                        <p className="number">{this.state.counter}</p>
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