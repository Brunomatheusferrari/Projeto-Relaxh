import React from "react";
import "./styles.css"

export function Error(props){
    return (
        <div className="error-div">
            <p className="error-text">{props.error}</p>
        </div>
    )
}