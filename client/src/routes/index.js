import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Contato } from "../pages/Contato"

export const Routes = () => {
   return(
       <BrowserRouter>
            <Switch>
                <Route component = { Homepage }  path="/" exact />
                <Route component = { Login }  path="/login" />
                <Route component = { Contato }  path="/contato" />
           </Switch>
       </BrowserRouter>
   )
}

export default Routes;