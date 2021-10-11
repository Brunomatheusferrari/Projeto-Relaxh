import React from "react";
import { AboutContainer } from "../../components/AboutContainer";
import sobreBruno from "../../static/img/sobreEduardo.png"
import sobreEduardo from "../../static/img/sobreBruno.png"
import sobreLucas from "../../static/img/sobreLucas.png"
import sobreMarlon from "../../static/img/sobreMarlon.png"
import sobreVinicius from "../../static/img/sobreVinicius.png"
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";



export function Sobre(props) {
    return (
        <AboutContainer>
          
            <div className="contentContainer">
                <div className="backButtonContainer">
                    <Link to="/" label="homepage"><FiArrowLeft className="backButton"/></Link>
                </div>
                <div className="contentAdjust">
                    <div className="aboutContainerText">
                        <div className="leaves2" />
                        <div className="titleContainer">
                            <h1 className="aboutTitle">Sobre</h1>
                        </div>
                        <p className="aboutContent">
                            Site desenvolvido por alunos do programa Entra21 da turma de Programação Web utilizando-se da linguagem Javascript juntamente com a biblioteca React. O site foi desenvolvido com o objetivo de facilitar a etapa de check-in e check-out com a tecnologia que vem crescendo ao longo dos últimos anos, o QR-Code. Também incrementamos páginas de serviço de quarto melhorando a experiência do cliente em sua estadia no hotel.
                        </p>
                        <div className="leaves1" />
                    </div>
                    
                    <div className="creatorsContainer">
                        <h2 className="cretorsTitle">Criado por:</h2>
                            <div className="creators-cards">
                                <div className="creators-card-1">
                                    <img src={sobreEduardo} className="sobre-img" />
                                    <h3 className="card-name">Bruno M. Ferrari</h3>
                                    <p className="subtitle">Hyperw</p>
                                    <div className="card-leaves" />
                                    <div className="card-leaves-2" />
                                </div>
                                <div className="creators-card-1">
                                    <img src={sobreBruno} className="sobre-img" />
                                    <h3 className="card-name-2">Eduardo V. Andruczewicz</h3>
                                    <p className="subtitle">Hyperw</p>
                                    <div className="card-leaves" />
                                    <div className="card-leaves-2" />
                                </div>
                                <div className="creators-card-1">
                                    <img src={sobreLucas} className="sobre-img" />
                                    <h3 className="card-name">Lucas G. Devigili</h3>
                                    <p className="subtitle">Hyperw</p>
                                    <div className="card-leaves" />
                                    <div className="card-leaves-2" />
                                </div>
                                <div className="creators-card-1">
                                    <img src={sobreMarlon} className="sobre-img" />
                                    <h3 className="card-name">Marlon W. Martins</h3>
                                    <p className="subtitle">Hyperw</p>
                                    <div className="card-leaves" />
                                    <div className="card-leaves-2" />
                                </div>
                                <div className="creators-card-1">
                                    <img src={sobreVinicius} className="sobre-img" />
                                    <h3 className="card-name">Vinicius B. Bilk</h3>
                                    <p className="subtitle">Hyperw</p>
                                    <div className="card-leaves" />
                                    <div className="card-leaves-2" />
                                </div>
                              
                            </div>
                    </div>
                </div>
            </div>

            <div className="imagesAdjust"> 
                <div className="leavesPng"></div>
                <div className="hyperwTeam"></div>
            </div>

        </AboutContainer>
    );
}