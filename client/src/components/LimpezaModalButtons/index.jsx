import React from "react";
import { LimpezaServicoList } from "../LimpezaServicoList";
import { Button } from "./Button"
import { Service } from "./Text";

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
                <div className="serviceList">
                    <div className="name">
                        <Service name={this.props.name} />
                    </div>
                    <div className="counter">
                        <Button legend="+" onClick={this.increment} />
                            <p className="number">{this.state.counter}</p>
                        <Button legend="-" onClick={this.decrement} />
                    </div>
                </div>
            </LimpezaServicoList>
        )
    }
}

Counter.defaultProps = {
    initial: 0
};