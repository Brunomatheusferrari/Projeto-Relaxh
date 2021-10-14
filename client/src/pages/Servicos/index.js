import React, { useEffect }  from "react";
import { CardDelivery } from "../../components/CardsServicos/CardDelivery";
import { CardLimpeza } from "../../components/CardsServicos/CardLimpeza";
import { CardOutros } from "../../components/CardsServicos/CardOutros";
import { ServicosContainer } from "../../components/PaginaServicos/ServicosContainer";
import forkndKnife from "../../static/img/forkandKnife.png";
import cleanerSpray from "../../static/img/cleanerSpray.png";
import poolPng from "../../static/img/poolPng.png";
import { Link } from "react-router-dom";
import "../../components/SideBar/index"
import authServices from "../../services/authServices";


export function Servicos() {
    
    useEffect(() =>{

        async function verifyUser(){
            try {
                const token = await authServices.getAccessToken()
                const role = await authServices.getRoleFromAccessToken(token)

                if(role === "guest"){
                    window.location.replace("/")
                }


            } catch (error) {
                console.log(error)
            }
        }

        verifyUser()

    },[])


    return(
        <ServicosContainer>
            <div className="leaves6"></div>
            <div className="contentAjust">
                <h1 className="servicosTitle">Serviços</h1>
                <div className="cards">
                    <Link to="/serviços-delivery" style={{textDecoration: "none"}}>
                        <CardDelivery>
                            <div className="leaves1"></div>
                            <img src={forkndKnife} alt="Fork and Knife" className="deliveryCardPng"/>
                            <h1 className="cardTitle">Delivery</h1>
                            <div className="leaves2"></div>
                        </CardDelivery>
                    </Link>

                    <Link to="serviços-limpeza" style={{textDecoration: "none"}}>
                        <CardLimpeza>
                            <div className="leaves1"></div>
                            <img src={cleanerSpray} alt="Fork and Knife" className="deliveryCardPng"/>
                            <h1 className="cardTitle">Limpeza</h1>
                            <div className="leaves2"></div>
                        </CardLimpeza>
                    </Link>

                    <Link to="/serviço-outros" style={{textDecoration: "none"}}>
                        <CardOutros>
                            <div className="leaves1"></div>
                            <img src={poolPng} alt="Fork and Knife" className="deliveryCardPng"/>
                            <h1 className="cardTitle">Outros</h1>
                            <div className="leaves2"></div>
                        </CardOutros>
                    </Link>
                </div>
            </div>
            <div className="leaves7"></div>
            <div className="leaves8"></div>
        </ServicosContainer>
    );
}