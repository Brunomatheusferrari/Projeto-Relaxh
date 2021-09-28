import React from "react"
import { LimpezaButton } from "../../components/LimpezaButton";
import { ServicoLimpeza } from "../../components/ServicoLimpeza";
import { Link } from "react-router-dom";


export function Limpeza(props) {

    return (

        <ServicoLimpeza>

            <div className="header">
                <div className="headerContents">
                    <div className="headerObjects">
                        <div className="cleanerSpray"></div>
                        <div className="dash"></div>
                        <h1 className="title">Serviços de Limpeza</h1>
                    </div>

                    <LimpezaButton onClick>
                            <Link to="/" label="Login" className="LimpezaButtonStyle">Fazer Pedido</Link>
                    </LimpezaButton>

                    <div className="leavesHeader">
                        <div className="leaves3Png"></div>
                        <div className="leaves4Png"></div>
                        <div className="leaves5Png"></div>
                    </div>
                </div>
            </div>

            <div className="leaves2Adjust">
                <div className="leaves2Png"></div>
            </div>
            <div className="leaves1Adjust">
                <div className="leavesPng"></div>
            </div>
        </ServicoLimpeza>
    )
}
