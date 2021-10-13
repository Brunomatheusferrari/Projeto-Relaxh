import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { Login } from "../pages/Login";
import { Contato } from "../pages/Contato"
import { SignUpContent } from "../pages/SignUp"
import { Sobre } from "../pages/About";
import { Precos } from "../pages/Precos"; 
import { Servicos } from "../pages/Servicos";
import { Limpeza } from "../pages/Limpeza";
import { Delivery } from "../pages/Delivery";
import { AdminDelivery } from "../pages/AdminDelivery";
import { PrivateRoute } from "./privateRoutes";
import { DeliveryProvider } from "../contexts/deliveryContext";
import { AdmWay } from "../pages/AdmWay";
import { AdminLimpeza} from "../pages/AdminLimpeza";
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
                <Route component= { Servicos } path="/serviços" />
                <Route component= { Limpeza } path="/serviços-limpeza" />
                <Route component= { AdmWay } path="/admin-select" />
                <Route component= { AdminLimpeza } path="/admin-limpeza" />
                <DeliveryProvider>
                    <Route component = { Delivery } path="/serviços-delivery" />
                </DeliveryProvider>
                <PrivateRoute path="/admin-delivery" permissions={["admin"]}>
                    <AdminDelivery/>
                </PrivateRoute>
           </Switch>
       </BrowserRouter>
   )
}

export default Routes;