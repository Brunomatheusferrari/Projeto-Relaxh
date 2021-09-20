import React from "react";
import { InputPrincipal } from "../../components/InputPrincipal";
import { LoginButton } from "../../components/LoginButton";
import { LoginContainer } from "../../components/LoginContainer";
import perfilPhoto from "../../static/img/perfilPhoto.png";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/SubmitButton";
 
export function Login(props) {
      
    return(
        <LoginContainer>
            <div className="contentContainer">
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
                
                <img src={perfilPhoto} className="perfilImg"/>
        </LoginContainer>
    );
}