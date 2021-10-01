import React from "react";
import { LimpezaServicoList } from "../DeliveryFoodList";
import { Button } from "./Button"

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
            <LimpezaServicoList>
                <Button legend="+" onClick={this.increment} />
                <p>{this.state.Counter}</p>
                <Button legend="-" onClick={this.decrement} />
            </LimpezaServicoList>
        )
    }
}

Counter.defaultProps = {
    initial: 0
};