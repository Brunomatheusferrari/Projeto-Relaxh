import React from "react";
import { DeliveryFoodList } from "../DeliveryFoodList";
import { Button }  from "./Button"

// const ButtonP = style.Component `

// `;

export class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
                Counter: props.initial
        };
    }

    increment = () => {
        this.setState(state => ({
            Counter: state.Counter + 1
        }));
    }

    decrement = () => {
        this.setState(state => ({
            Counter: state.Counter - 1
        }));
    }

    render() {
        return (
            <DeliveryFoodList>
                <Button legend="+" onClick={this.increment} />
                <p>{this.state.Counter}</p>
                <Button legend="-" onClick={this.decrement} />
            </DeliveryFoodList>
        )
    }
}

Counter.defaultProps = {
    initial: 0
};