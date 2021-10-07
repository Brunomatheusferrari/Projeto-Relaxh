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
import { CaribeSection } from "../../components/CaribeSection";
import { CardsSection } from "../../components/CardsSection";
import gastronomyPhoto from "../../static/img/gastronomyPhoto.png";
import servicesPhoto from "../../static/img/servicesPhoto.png";
import confortPhoto from "../../static/img/confortPhoto.png";
import { QrCodeSection } from "../../components/QrCodeSection";
import { RoomsSection } from "../../components/RoomsSection";
import { ReserveSection } from "../../components/ReserveSection";
import { DateInputReserve } from "../../components/DateInputReserve";
import { SelectInputReserve } from "../../components/SelectInputReserve";




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
                {/* <div className="lineTextCenter">
                    <LineText title="Relaxh" />
                </div> */}
                <div className="contentContainer">
                        <p className="sectionTitle">Moderno, Simples e Prático.</p>
                        <img src={LogoRelaxh} className="logoRelaxh" />
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
                        <div className="about-us-line" />
                    </div>

                    <div className="leaves-about-us" />
            </AboutUsSection>       
            <CaribeSection>
                <div className="caribe-card">
                    <div className="caribe-card-content">
                        <h2 className="caribe-card-title">Caribe</h2>
                        <p className="caribe-card-text">A ilhas do Caribe são considerados por muitos um dos lugares mais bonitos do mundo.  Com suas lindas águas cristalina e prais magníficas. Isso faz com que seus problemas se percam em meio a tanta beleza. Esperamos que goste da brisa do mar e das lindas noites estreladas.</p>
                        <div className="text-line">
                            <div className="line"></div>
                            <p className="text">Relaxh</p>
                        </div>
                    </div>

                
                </div>

                <div className="caribe-photo">

                </div>
            </CaribeSection>
            
            <CardsSection>
                <div className="divider">
                    <div className="line-text">
                        <p className="text">Gastronomia</p>
                        <div className="line" />
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <h2 className="card-title">Gastronomia</h2>
                            <div className="card-white-line"></div>
                            <p className="card-text">A ilhas do Caribe são considerados por muitos um dos lugares mais bonitos do mundo.  Com suas lindas águas cristalina e prais magníficas. Isso faz com que seus problemas se percam em meio a tanta beleza. Esperamos que goste da brisa do mar e das lindas noites estreladas.</p>
                        </div>
                    </div>
                    <img src={gastronomyPhoto} className="card-photo" />
                    <div className="white-line"></div>
                </div>

                <div className="divider">
                    <div className="line-text2">
                        <div className="line" />
                        <p className="text2">Serviços</p>
                    </div>
                      <div className="card-2">
                        <div className="card-container">
                            <h2 className="card-title">Serviços</h2>
                            <div className="card-white-line"></div>
                            <p className="card-text">A ilhas do Caribe são considerados por muitos um dos lugares mais bonitos do mundo.  Com suas lindas águas cristalina e prais magníficas. Isso faz com que seus problemas se percam em meio a tanta beleza. Esperamos que goste da brisa do mar e das lindas noites estreladas.</p>
                        </div>
                    </div>
                    <img src={servicesPhoto} className="card-photo-2" />
                    <div className="white-line"></div>
                </div>
                
                <div className="divider">
                    <div className="line-text3">
                        <p className="text">Conforto</p>
                        <div className="line" />
                    </div>
                    <div className="card">
                        <div className="card-container">
                            <h2 className="card-title">Conforto</h2>
                            <div className="card-white-line"></div>
                            <p className="card-text">A ilhas do Caribe são considerados por muitos um dos lugares mais bonitos do mundo.  Com suas lindas águas cristalina e prais magníficas. Isso faz com que seus problemas se percam em meio a tanta beleza. Esperamos que goste da brisa do mar e das lindas noites estreladas.</p>
                        </div>
                    </div>
                    <img src={confortPhoto} className="card-photo" />
                    <div className="white-line"></div>
                </div>
            </CardsSection>

            <QrCodeSection>
                <div className="qrcode-leaves1" />
                <div className="qrcode-line-text">
                   <p className="qrcode-line-text-text">Qr-Code</p>
                   <div className="qrcode-line-text-line" />
                </div>
                <div className="qrcode-content-container">
                    <h2 className="qrcode-title">Qr Code Check In</h2>
                    <p className="qrcode-text">  Contruido em 2021 com o objetivo de ser simples, moderno e prático, levando o melhor das lindas praias do caribe com uma preço acessível. Com diversos serviços de facil acesso como por exemplo, delivery de comida e agendamento de limpeza de quarto. Também contamos com a nova tecnologia de check-in por qr code, o que facilita a entrada e saída do hotel.</p>
                </div>
                <div className="qrcode-leaves2" />
            </QrCodeSection>

            <RoomsSection>
                <div className="rooms-background">
                    <div className="rooms-container">
                        <div className="room-content-container">
                            <h3 className="room-title">Deluxe</h3>
                            <ul className="room-list">
                                <li className="room-list-item">2 camas</li>
                                <li className="room-list-item">Banheira com Hidromassagem</li>
                                <li className="room-list-item">2 Banheiros</li>
                                <li className="room-list-item">2 Televisões</li>
                            </ul>
                        </div>
                        <div className="vertical-white-line" />
                        <div className="room-content-container">
                            <h3 className="room-title">Premium</h3>
                            <ul className="room-list">
                                <li className="room-list-item">2 camas</li>
                                <li className="room-list-item">Banheira com Hidromassagem</li>
                                <li className="room-list-item">2 Banheiros</li>
                                <li className="room-list-item">2 Televisões</li>
                            </ul>
                        </div>
                        <div className="vertical-white-line" />
                        <div className="room-content-container">
                            <h3 className="room-title">Standart</h3>
                            <ul className="room-list">
                                <li className="room-list-item">2 camas</li>
                                <li className="room-list-item">Banheira com Hidromassagem</li>
                                <li className="room-list-item">2 Banheiros</li>
                                <li className="room-list-item">2 Televisões</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </RoomsSection>

            <ReserveSection>
                <div className="reserve-white-line-1" />
                <div className="leaves1" />
                <div className="reserve-content-container">
                    <h2 className="reserve-title">Fazer <strong>Reserva</strong></h2>
                    <div className="reserve-inputs">
                        <div className="input-container">
                            <p className="input-title">Data de Entrada</p>
                            <DateInputReserve type="date" />
                        </div>
                        <div className="input-container">
                            <p className="input-title">Data de Saída</p>
                            <DateInputReserve type="date" />
                        </div>
                        <div className="input-container">
                            <p className="input-title">Quarto</p>
                           <SelectInputReserve>
                                <option>Standard</option>
                                <option>Deluxe</option>
                                <option>Premium</option>
                           </SelectInputReserve>
                        </div>
                        <div className="input-container">
                            <p className="input-title">Crianças</p>
                            <SelectInputReserve className="numberSelect">
                                <option className="number">0</option>
                                <option  className="number">1</option>
                                <option  className="number">2</option>
                                <option  className="number">3</option>
                                <option  className="number">4</option>
                                <option  className="number">5</option>
                           </SelectInputReserve>
                        </div>
                        <div className="input-container">
                            <p className="input-title">Adultos</p>
                            <SelectInputReserve className="numberSelect">
                                <option  className="number">0</option>
                                <option  className="number">1</option>
                                <option  className="number">2</option>
                                <option  className="number">3</option>
                                <option  className="number">4</option>
                                <option  className="number">5</option>
                           </SelectInputReserve>
                        </div>
                    </div>
                    <div className="reserve-button">
                        <LoginButton onClick={handleClick}>
                                <Link to="/" className="loginButtonStyle">Fazer Reserva</Link>
                        </LoginButton>
                    </div>
                </div>
                <div className="reserve-white-line-2" />
                <div className="leaves2" />
            </ReserveSection>
        </>
    );
}