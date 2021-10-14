import React from "react";
import { LimpezaServicoList } from "../LimpezaServicoList";
import { Service } from "./Text";

export function Counter(props) {


        return (
            <LimpezaServicoList onChange={props.onChange}>
                <div className="serviceList">
                    <div className="name">
                        <Service name={props.name} />
                    </div>
                    <div className="input">
                        <input type="time"/>
                    </div>
                </div>
            </LimpezaServicoList>
        )
}
    