import React from "react"
import { useState } from "react"
import { Reserva } from "./components/Reserva"
import { Cadastro } from "./components/Cadastro"
import { Pagamento } from "./components/Pagamento"
import { PersonalInfo } from "./components/PersonalInfo"


import "./styles.css"
import { RegisterProvider } from "../../contexts/registerContext"

export function SignUp() {
  const [index, setIndex] = useState("reserva");

  return (
    <div className="container-principal">
      <img src="https://i.imgur.com/L2HdO40.png" className="img-header" />
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
            <p>Informações</p>
            <button className="button-header" onClick={() => setIndex("info")}></button>
          </div>
          <div className="div-button">
            <p>Pagamento</p>
            <button className="button-header" onClick={() => setIndex("pagamento")}></button>
          </div>
        </div>
          <RegisterProvider>
            {
              index === "reserva" &&
              <Reserva next={() => setIndex("cadastro")} />
            }
            {
              index === "cadastro" &&
              <Cadastro next={() => setIndex("info")} />
            }
            {
              index === "info" &&
              <PersonalInfo next={() => setIndex("pagamento")}/>
            }
            {
              index === "pagamento" &&
              <Pagamento next={() => setIndex("reserva")}/>
            }
          </RegisterProvider>
      </div>
    </div>
  )
}
