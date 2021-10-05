import React from "react";
import { LimpezaServicoList } from "../LimpezaServicoList";
import { Service } from "./Text";

export class Counter extends React.Component {

    render() {
        return (
            <LimpezaServicoList>
                <div className="serviceList">
                    <div className="name">
                        <Service name={this.props.name} />
                    </div>
                    <div className="input">
                        <input type="time"/>
                    </div>
                </div>
            </LimpezaServicoList>
        )
    }
}
    