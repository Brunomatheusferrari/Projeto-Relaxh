import React from "react";
import { HeaderContainer } from "../../components/HeaderCointainer";
import { ReserveButton } from "../../components/ReserveButton";
import relaxhTitle from "../../static/img/relaxhTitle.png"
import relaxhSubtitle from "../../static/img/relaxhSubtitle.png"
import { FiArrowDownCircle, FiMenu  } from "react-icons/fi";
import bgVideo from "../../static/video/bgVideo.mp4"
import { NavBarHeader } from "../../components/NavBarHeader";
import { LoginButton } from "../../components/LoginButton";

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
    
    </>
    );
}