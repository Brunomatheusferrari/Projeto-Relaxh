import React from "react";
import { InputPrincipal } from "../../components/InputPrincipal";
import { LoginButton } from "../../components/LoginButton";
import { LoginContainer } from "../../components/LoginContainer";
import perfilPhoto from "../../static/img/perfilPhoto.png";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../components/SubmitButton";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";
import authServices from "../../services/authServices";
import { Error } from "../../components/Error";


export function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const accessToken = authServices.getAccessToken();  

    if (accessToken) {
      return window.location.replace("/") 
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null)
        try {
            await authServices.signIn(email, password);            
            window.location.replace("/");
        } catch (err) {
            setError(err.message);
            console.log(err.message)
        }
    }

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
                            <div className="input1">
                                <InputPrincipal type="email" onChange={e =>  setEmail(e.target.value)} placeholder="Email" required />
                            </div>
                            <div className="input2">
                                <InputPrincipal type="password" onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
                            </div>
                            {error &&
                                <Error error={error}/>
                            }
                        </div>
                        <SubmitButton onClick={handleSubmit}>                
                            <Link to="/entrar" label="Login" className="loginButtonStyle">Entrar</Link>                
                        </SubmitButton>
                        <p className="passwordRecover">Esqueceu sua senha? <strong><Link to="/contato" label="contato" className="linkContato">Entre em Contato </Link></strong></p>
                    </div>
                </div>
                <div className="leavesPng2"></div>
            </div>
                <img src="https://i.imgur.com/77JMfdd.png" className="perfilImg"/>
        </LoginContainer>
    );
}