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
          <div className="div-button" onClick={() => setIndex("reserva")}>
            <p>Reserva</p>
            <button className="button-header"></button>
          </div>
          <div className="div-button" onClick={() => setIndex("cadastro")}>
            <p>Cadastro</p>
            <button className="button-header"></button>
          </div>
          <div className="div-button" onClick={() => setIndex("info")}>
            <p>Informações</p>
            <button className="button-header"></button>
          </div>
          <div className="div-button" onClick={() => setIndex("pagamento")}>
            <p>Pagamento</p>
            <button className="button-header"></button>
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
          <div className="leaves1-2" />
          <div className="leaves2-2" />
      </div>
    </div>
  )
}
