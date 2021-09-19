import React from "react";
import { HeaderContainer } from "../../components/HeaderCointainer";
import { ReserveButton } from "../../components/ReserveButton";
import relaxhTitle from "../../static/img/relaxhTitle.png"
import relaxhSubtitle from "../../static/img/relaxhSubtitle.png"
import { FiArrowDownCircle, FiMenu  } from "react-icons/fi";
import bgVideo from "../../static/video/bgVideo.mp4"
import { NavBarHeader } from "../../components/NavBarHeader";
import { LoginButton } from "../../components/LoginButton";
import { IntroductSection } from "../../components/IntroductSection";
import { LineText } from "../../components/LineText";
import LogoRelaxh from "../../static/img/logoRelaxh.png"
import hotelPhoto from "../../static/img/hotelPhoto.png"
import { HotelPhoto } from "../../components/HotelPhoto";

export function Homepage() {
    return(
    <>
    <HeaderContainer>
        <NavBarHeader>
            <FiMenu className="menuIcon"/>
            <LoginButton>Login</LoginButton>
        </NavBarHeader>
        <img src={relaxhTitle} />
        <img src={relaxhSubtitle} className="subtitle"/>
        <ReserveButton href="www.youtube.com">Reservar Agora</ReserveButton>
        <FiArrowDownCircle className="iconArrowDown"/>
        <video className="videoBg" autoPlay loop muted>
            <source src={bgVideo} />
        </video>
    </HeaderContainer>
        <IntroductSection>
            <div className="lineTextCenter">
                <LineText title="Relaxh" />            
            </div>
            <div className="contentContainer"> 
                <p className="sectionTitle">Moderno, Simples e Prático.</p>
                <img src={LogoRelaxh} className="logoRelaxh"/>
            </div>
            <div className="bgLogo"></div>
           
        </IntroductSection>
    
        <HotelPhoto src={hotelPhoto} />
    </>
    );
}