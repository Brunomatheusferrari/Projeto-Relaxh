import React from "react"
import "./styles.css"

export function ButtonSub(props) {
    return (
        <input type="submit" placeholder={props.title} className="button-submit" {...props}>
        </input>
    )
}