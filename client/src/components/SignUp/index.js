import React from "react"
import ImageSignUp from "../../static/img/SingUpPage.png"
import { useState } from "react"

import { Reserva } from "./components/Reserva"
import { Cadastro } from "./components/Cadastro"
import { Pagamento } from "./components/Pagamento"

import "./styles.css"

export function SignUp() {
  const [index, setIndex] = useState("cadastro");

  return (
    <div className="container-principal">
      <img src={ImageSignUp} />
      <div className="container-sub">
        <div className="container-buttons">
          <div className="div-button">
            <p>Reserva</p>
            <button className="button-header" onClick={() => setIndex("reserva")}></button>
          </div>
          <div className="div-button">
            <p>Cadastro</p>
            <button className="button-header" onClick={() => setIndex("cadastro")}></button>
          </div>
          <div className="div-button">
            <p>Pagamento</p>
            <button className="button-header" onClick={() => setIndex("pagamento")}></button>
          </div>
        </div>
        {
          index == "reserva" &&
          <Reserva />
        }
        {
          index == "cadastro" &&
          <Cadastro />
        }
        {
          index == "pagamento" &&
          <Pagamento />
        }
      </div>
    </div>
  )
}
