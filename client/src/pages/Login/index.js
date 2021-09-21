import React from "react";
import { InputPrincipal } from "../../components/InputPrincipal";
import { LoginButton } from "../../components/LoginButton";
import { LoginContainer } from "../../components/LoginContainer";
import perfilPhoto from "../../static/img/perfilPhoto.png";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/SubmitButton";
import { FiArrowLeft } from "react-icons/fi";

export function Login(props) {
      
    return(
        <LoginContainer>
            <div className="wrapper">
                <div className="leavesPng"></div>
                    <div className="contentContainer">
                        <div className="backButtonContainer">
                        <Link to="/" label="homepage"><FiArrowLeft className="backButton"/></Link>
                        </div>
                        <div className="contentAdjust">
                        <h1 className="loginTitle">Login</h1>
                        <div className="containerInputs">
                        <InputPrincipal type="email" placeholder="Email" />
                        <InputPrincipal type="password" placeholder="Senha" />
                        </div>
                        <SubmitButton>                
                        <Link to="/Login" label="Login" className="loginButtonStyle">Entrar</Link>                
                        </SubmitButton>
                        <p className="passwordRecover">Esqueceu sua senha? <strong>Entre em Contato</strong></p>
                    </div>
                </div>

                <div className="leavesPng2"></div>
            </div>
        
               

                <img src={perfilPhoto} className="perfilImg"/>
        </LoginContainer>
    );
}