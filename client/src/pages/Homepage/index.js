import React, { useState } from "react";
import { HeaderContainer } from "../../components/HeaderCointainer";
import { ReserveButton } from "../../components/ReserveButton";
import relaxhTitle from "../../static/img/relaxhTitle.png"
import relaxhSubtitle from "../../static/img/relaxhSubtitle.png"
import { FiArrowDownCircle, FiMenu } from "react-icons/fi";
import bgVideo from "../../static/video/bgVideo.mp4"
import { NavBarHeader } from "../../components/NavBarHeader";
import { LoginButton } from "../../components/LoginButton";
import { IntroductSection } from "../../components/IntroductSection";
import { LineText } from "../../components/LineText";
import LogoRelaxh from "../../static/img/logoRelaxh.png"
import hotelPhoto from "../../static/img/hotelPhoto.jpg"
import { HotelPhoto } from "../../components/HotelPhoto";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import authServices from "../../services/authServices"
import { MenuSidebar } from "../../components/SideBar/index.js";
import { AboutUsSection } from "../../components/AboutUsSection";




export function Homepage(props) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const accessToken = authServices.getAccessToken();

    function handleClick() {
        localStorage.clear()

        return window.location.replace("/")
    }

    return (
        <>  
            <MenuSidebar isVisible={isMenuVisible} closeModal={() => setIsMenuVisible(false)} />
            <HeaderContainer>
                <NavBarHeader>
                    <FiMenu className="menuIcon" onClick={() => setIsMenuVisible(true)} />
                    {!accessToken ?
                        <div>
                            <LoginButton>
                                <Link to="/entrar" label="entrar" className="loginButtonStyle">Login</Link>
                            </LoginButton>
                            {/* <LoginButton>
                                <Link to="/cadastro" label="signin" className="loginButtonStyle">SignIn</Link>
                            </LoginButton> */}
                        </div>
                        :
                        <LoginButton onClick={handleClick}>
                            <Link to="/" className="loginButtonStyle">SignOut</Link>
                        </LoginButton>
                    }
                </NavBarHeader>
                <div className="titleContainer">
                    <img src={relaxhTitle} />
                    <img src={relaxhSubtitle} className="subtitle" />
                    <ReserveButton>
                        <Link to="/cadastro" label="cadastro" className="reserveButton">Reservar Agora</Link>
                    </ReserveButton>
                    <video className="videoBg" autoPlay loop muted>
                        <source src={bgVideo} />
                    </video>
                </div>
                <FiArrowDownCircle className="iconArrowDown" />

            </HeaderContainer>
            <IntroductSection>
                <div className="lineTextCenter">
                    <LineText title="Relaxh" />
                </div>
                <div className="contentContainer">
                    <Fade bottom cascade>
                        <p className="sectionTitle">Moderno, Simples e Prático.</p>
                        <img src={LogoRelaxh} className="logoRelaxh" />
                    </Fade>

                </div>
                <div className="bgLogo"></div>

            </IntroductSection>

            <HotelPhoto src={hotelPhoto} />     

            <AboutUsSection>
                    <div className="about-us-content">
                        <h2 className="about-us-title">Quem Nós Somos?</h2>
                        <p className="about-us-text">A ilhas do Caribe são considerados por muitos um dos lugares mais bonitos do mundo.  
                        Com suas lindas águas cristalina e prais magníficas. Isso faz com que seus problemas se percam em meio a tanta beleza. 
                        Esperamos que goste da brisa do mar e das lindas noites estreladas.</p>
                        <p className="about-us-detail">O paraíso é aqui.</p>
                    </div>

                    <div className="leaves-about-us" />
            </AboutUsSection>       
        </>
    );
}