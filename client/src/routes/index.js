import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Contato } from "../pages/Contato"
import { SignUpContent } from "../pages/SignUp"
import { Sobre } from "../pages/About";
import { Precos } from "../pages/Precos"; 


export const Routes = () => {
   return(
       <BrowserRouter>
            <Switch>
                <Route component = { Homepage }  path="/" exact />
                <Route component = { Login }  path="/entrar" />
                <Route component = { Contato }  path="/contato" />
                <Route component = { SignUpContent } path="/cadastro" />
                <Route component= { Sobre } path="/sobre" />
                <Route component= { Precos } path="/preços" />
           </Switch>
       </BrowserRouter>
   )
}

export default Routes;