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
import { PrivateRoute } from "./privateRoutes";
import { DeliveryProvider } from "../contexts/deliveryContext";
import { AdmWay } from "../pages/AdmWay";
import { AdminLimpeza} from "../pages/AdminLimpeza";
import { AdminDelivery } from "../pages/AdminDelivery";
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

                <PrivateRoute path="/serviços-limpeza" permissions={["admin", "user"]}>
                    <Limpeza/>
                </PrivateRoute>

                <PrivateRoute path="/serviços" permissions={["admin", "user"]}>
                    <Servicos/>
                </PrivateRoute>

                <PrivateRoute path="/serviços-delivery" permissions={["admin", "user"]}>
                    <DeliveryProvider>
                        <Delivery />
                    </DeliveryProvider>
                </PrivateRoute>      

                <PrivateRoute path="/admin-select" permissions={["admin"]}>
                    <AdmWay/>
                </PrivateRoute>

                <PrivateRoute path="/admin-delivery" permissions={["admin"]}>
                    <AdminDelivery />
                </PrivateRoute>

                <PrivateRoute path="/admin-limpeza" permissions={["admin"]}>
                    <AdminLimpeza/>
                </PrivateRoute>
           </Switch>
       </BrowserRouter>
   )
}

export default Routes;