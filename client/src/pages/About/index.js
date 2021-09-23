import React from "react";
import { AboutContainer } from "../../components/AboutContainer";

export function Sobre(props) {

    return (
        <AboutContainer>
            <div className="leavesAdjust">
                <div className="leavesPng"></div>
            </div>
            <div className="contentContainer">
                <div className="contentAdjust">
                    <div className="titleContainer">
                        <h1 className="aboutTitle">Sobre</h1>
                    </div>

                    <div className="aboutContainer">
                        <p className="aboutContent">
                            Site desenvolvido por alunos do programa Entra21
                            da turma de Programação Web,
                            utilizando-se da linguagem Javascript com
                            a biblioteca React.
                        </p>
                    </div>

                    <div className="creatorsContainer">
                        <h2 className="cretorsTitle">Criado por:</h2>
                        <ul className="creatorsUL">
                            <li className="creatorsLI ">
                                Bruno M. Ferrari
                            </li>
                            <li className="creatorsLI ">
                                Eduardo V. Andruczewicz
                            </li>
                            <li className="creatorsLI ">
                                Lucas G. Devigili
                            </li>
                            <li className="creatorsLI ">
                                Marlon W. Martins
                            </li>
                            <li className="creatorsLI ">
                                Vinicius B. Bilk
                            </li>
                        </ul>
                    </div>
                </div>
                    <div className="hyperwTeam"></div>

            </div>


        </AboutContainer>
    );
}