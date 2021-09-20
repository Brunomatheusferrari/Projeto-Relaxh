import React from "react";
import { LoginButton } from "../../components/LoginButton";
import { LoginContainer } from "../../components/LoginContainer";
import perfilPhoto from "../../static/img/perfilPhoto.png"

export function Login(props) {
      
    return(
        <LoginContainer>
            <div className="contentContainer">
                <div className="contentAdjust">
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="inputLogin"></input>
                <input type="text" placeholder="Senha" className="inputLogin"></input>
                <input type="button" value="Enviar" className="inputLogin"></input>
                
                </div>
               
               
            </div>
                
                <img src={perfilPhoto} className="perfilImg"/>
        </LoginContainer>
    );
}