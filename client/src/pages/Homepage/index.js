import React, { useEffect, useState, useRef } from "react";
import { HeaderContainer } from "../../components/HeaderCointainer";
import { ReserveButton } from "../../components/ReserveButton";
import relaxhTitle from "../../static/img/relaxhTitle.png"
import relaxhSubtitle from "../../static/img/relaxhSubtitle.png"
import { FiArrowDownCircle, FiMenu, FiChevronDown } from "react-icons/fi";
import bgVideo from "../../static/video/bgVideo.mp4"
import { NavBarHeader } from "../../components/NavBarHeader";
import { LoginButton } from "../../components/LoginButton";
import { IntroductSection } from "../../components/IntroductSection";
import { LineText } from "../../components/LineText";
import LogoRelaxh from "../../static/img/logoRelaxh.png"
import hotelPhoto from "../../static/img/hotelPhoto.png"
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
import { SecondNavbar } from "../../components/SecondNavbar/index";
import './styles.css'
import useWindowSize from "../../hooks/useWindowSize";




export function Homepage(props) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const accessToken = authServices.getAccessToken();
    const [navbar, setNavbar] = useState(false);
    const [card, setCard] = useState(false);

    function handleClick() {
        localStorage.clear()

        return window.location.replace("/")
    }

    const changeBackground = () => {
        if(window.scrollY >= 900) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    // const size = useWindowSize();

    // const app =  useRef();
    // const scrollContainer = useRef();

    // const skewConfigs = {
    //     ease: .1,
    //     current: 0,
    //     previous: 0,
    //     rounded: 0
    // }

    // useEffect(() => {
    //     console.log(size.height)
    //     document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`;
    // }, [size.height])

    // useEffect(() => {
    //     requestAnimationFrame(() => skewScrolling())
    // }, [])

    // const skewScrolling = () => {
    //     skewConfigs.current = window.scrollY;
    //     skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
    //     skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;


    //     const difference = skewConfigs.current - skewConfigs.rounded;
    //     const acceleration = difference / size.width
    //     const velocity = +acceleration;
    //     const skew = velocity * 7.5;


    //     scrollContainer.current.style.transform = `translateY(-${skewConfigs.rounded}px)`

    //     requestAnimationFrame(() => skewScrolling())
    // }

    
    // function ativaNoScroll() {

    //     let caribeCard = document.querySelector('.caribe-card');

    //         if(caribeCard.getBoundingClientRect().top < window.innerHeight - 500) {
    //             // console.log("apareceu");
    //             caribeCard.classList.add("animation-card");
    //         };	
    
    // }
    
    const [followers, setFollowers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
      const perPage = 10;
      const ENDPOINT = 'https://api.github.com/users/omariosouto/followers';
      const URL = `${ENDPOINT}?per_page=${perPage}&page=${currentPage}&order=DESC`;
      fetch(URL)
        .then((response) => response.json())
        .then((newFollowers) => setFollowers((prevFollowers) => [...prevFollowers, ...newFollowers]))
    }, [currentPage]);

    const options = {
        root: document.querySelector('#viewport'),
        rootMargin: '0px',
        threshold: 0.0
    };

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let caribePhoto = document.querySelector('.caribe-photo');
              caribePhoto.classList.add("animation-card");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.caribe-photo'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.card-photo');
              cardsPhotos.classList.add("animation-card-2");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.card-photo'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.card-photo-2');
              cardsPhotos.classList.add("animation-card");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.card-photo-2'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.card-photo-3');
              cardsPhotos.classList.add("animation-card-2");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.card-photo-3'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.card');
              cardsPhotos.classList.add("animation-card");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.card'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.card-2');
              cardsPhotos.classList.add("animation-card-2");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.card-2'));
        return () => intersectionObserver.disconnect();
      }, []);

      
      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.card-3');
              cardsPhotos.classList.add("animation-card");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.card-3'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.logoRelaxh');
              cardsPhotos.classList.add("animationLogo");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.logoRelaxh'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.sectionTitle');
              cardsPhotos.classList.add("animationText");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.sectionTitle'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.about-us-title');
              cardsPhotos.classList.add("animationText");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.about-us-title'));
        return () => intersectionObserver.disconnect();
      }, []);

      
      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.about-us-text');
              cardsPhotos.classList.add("animationText");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.about-us-text'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.about-us-line');
              cardsPhotos.classList.add("animationLine");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.about-us-line'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.caribe-card');
              cardsPhotos.classList.add("animation-card-2");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.caribe-card'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.qrcode-title');
              cardsPhotos.classList.add("animationText");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.qrcode-title'));
        return () => intersectionObserver.disconnect();
      }, []);

      useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
          if (entries.some(entry => entry.isIntersecting)) {
              console.log(intersectionObserver);
              let cardsPhotos = document.querySelector('.qrcode-text');
              cardsPhotos.classList.add("animationText");
          }
        }, options)
        intersectionObserver.observe(document.querySelector('.qrcode-text'));
        return () => intersectionObserver.disconnect();
      }, []);






    


    
    
    // window.addEventListener('scroll', ativaNoScroll);
  
    return (
        <>  
        <MenuSidebar isVisible={isMenuVisible} closeModal={() => setIsMenuVisible(false)} />
        <NavBarHeader>
            <div className={navbar ? 'navbar active' : 'navbar'}>
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
            </div>
            </NavBarHeader>

            <SecondNavbar>
            <div className={navbar ? 'navbarActive active' : 'navbar'}>
                <FiMenu className="menuIcon" onClick={() => setIsMenuVisible(true)} />
                <img src={relaxhTitle} className="menuRelaxh" />
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
            </div>
            </SecondNavbar> 
                <HeaderContainer>
                    
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
                    <FiChevronDown className="iconArrowDown" />

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
                        <div className="card-3">
                            <div className="card-container">
                                <h2 className="card-title">Conforto</h2>
                                <div className="card-white-line"></div>
                                <p className="card-text">A ilhas do Caribe são considerados por muitos um dos lugares mais bonitos do mundo.  Com suas lindas águas cristalina e prais magníficas. Isso faz com que seus problemas se percam em meio a tanta beleza. Esperamos que goste da brisa do mar e das lindas noites estreladas.</p>
                            </div>
                        </div>
                        <img src={confortPhoto} className="card-photo-3" />
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