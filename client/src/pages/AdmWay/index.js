import React  from "react";
import { CardDelivery } from "../../components/CardsServicos/CardDelivery";
import { CardLimpeza } from "../../components/CardsServicos/CardLimpeza";
import { CardOutros } from "../../components/CardsServicos/CardOutros";
import { ServicosContainer } from "../../components/PaginaServicos/ServicosContainer";
import forkndKnife from "../../static/img/forkandKnife.png";
import cleanerSpray from "../../static/img/cleanerSpray.png";
import poolPng from "../../static/img/poolPng.png";


export function AdmWay() {
    return(
        <ServicosContainer>
            <div className="leaves6"></div>
            <div className="contentAjust">
                <h1 className="servicosTitle">Serviços</h1>
                <div className="cards">
                    <CardDelivery>
                        <div className="leaves1"></div>
                        <img src={forkndKnife} alt="Fork and Knife" className="deliveryCardPng"/>
                        <h1 className="cardTitle">Delivery</h1>
                        <div className="leaves2"></div>
                    </CardDelivery>

                    <CardLimpeza>
                        <div className="leaves1"></div>
                        <img src={cleanerSpray} alt="Fork and Knife" className="deliveryCardPng"/>
                        <h1 className="cardTitle">Limpeza</h1>
                        <div className="leaves2"></div>
                    </CardLimpeza>

                    <CardOutros>
                        <div className="leaves1"></div>
                        <img src={poolPng} alt="Fork and Knife" className="deliveryCardPng"/>
                        <h1 className="cardTitle">Reservas</h1>
                        <div className="leaves2"></div>
                    </CardOutros>
                </div>
            </div>
            <div className="leaves7"></div>
            <div className="leaves8"></div>
        </ServicosContainer>
    );
}