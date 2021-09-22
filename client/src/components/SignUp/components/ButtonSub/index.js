import React from "react"
import "./styles.css"

export function ButtonSub(props) {
    return (
        <a className="button-submit">
            {props.title}
        </a>
    )
}