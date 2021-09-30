export function Button(props) {
    return <button onClick={props.onClick} className="button"> {props.legend} </button>
}

