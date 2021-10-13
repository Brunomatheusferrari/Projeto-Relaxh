import styled from "styled-components";
import colors from "../../themes/colors";
import leaves10 from "../../static/img/leaves10.png";
import { keyframes } from "styled-components";

const openLeft = keyframes`
    from {
        width: 0;
    }

    to {
        width: 45vw;
    }
`;

const scaleUpMenu = keyframes`
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            width: 0;
            /* -webkit-transform: scaleX(0.4);
            /* transform: scaleX(0.4); */
            /* -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%; */ */
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
            width: 45vw;
            /* -webkit-transform: scaleX(1); */
            /* transform: scaleX(1); */
            /* -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%; */
  }
`;

const scaleUpMenuMedium = keyframes`
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            width: 0;
            /* -webkit-transform: scaleX(0.4);
            /* transform: scaleX(0.4); */
            /* -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%; */ */
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
            width: 60vw;
            /* -webkit-transform: scaleX(1); */
            /* transform: scaleX(1); */
            /* -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%; */
  }
`;

const scaleUpMenuLarge = keyframes`
  0% {
    -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
            width: 0;
            /* -webkit-transform: scaleX(0.4);
            /* transform: scaleX(0.4); */
            /* -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%; */ */
  }
  100% {
    -webkit-transform: translateX(0px);
            transform: translateX(0px);
            width: 100vw;
            /* -webkit-transform: scaleX(1); */
            /* transform: scaleX(1); */
            /* -webkit-transform-origin: 0% 0%;
            transform-origin: 0% 0%; */
  }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 100%;
    }
`;

const lineOpen = keyframes`
    from {
        height: 0;
    }

    to {
        height: 90%;
    }
`;

export const Sidebar = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 45vw;
    height: 100vh;
    /* background-color: ${colors.mediumGreen}; */
    position: fixed;
    z-index: 100000;
    display: ${props => props.isVisible ? "flex" : "none"};
    transition: 1s ease-in-out;
    flex-direction: column;
    /* justify-content:  center; */
    /* align-items: center; */
    /* animation: ${openLeft} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1); */

    .link {
        text-decoration: none;  
    }

    .sidebarBackground {
        width: 45vw;
        height: 100vh;
        background-color: ${colors.mediumGreen};
        display: flex;
        flex-direction: column;
        justify-content:  center;
        align-items: center;
        animation: ${scaleUpMenu} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .menu-container {
        display: flex;
        height: 40%;
        align-items: center;
        animation: ${fadeIn} 4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .white-line {
        width: 3px;
        height: 90%;
        background-color: ${colors.lightWhite};
        position: relative;
        left: -30%;
        top: 2%;
        animation: ${lineOpen} 4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-around;
        height: 100%;
    }

    .menu-item-container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        transition: .5s ease-in-out;

        &:hover {
            transform: scale(1.1);
            color: white;
            cursor: pointer;
        }
    }

    .item-number {
        font-size: 'Montserrat', sans-serif;
        margin-right: 10px;
        font-size: 20px;
    }

    .menu-item {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 76px;
        margin: 0;
    }

    .leaves1 {
        width: 12vw;
        height: 22vh;
        position: absolute;
        background-image: url("https://i.imgur.com/xYZfIx2.png");
        background-repeat: no-repeat;
        background-size: cover;
        top: -4%;
        right: 10%;
        transform: rotate(275deg);
        animation: ${fadeIn} 4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    
    .leaves2 {
        width: 12vw;
        height: 22vh;
        position: absolute;
        background-image: url("https://i.imgur.com/xYZfIx2.png");
        background-repeat: no-repeat;
        background-size: cover;
        bottom: -2%;
        left: 0%;
        transform: rotate(180deg);
        transform: scaleX(-1);
        animation: ${fadeIn} 4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .menu-close-button {
        width: 5%;
        height: 5%;
        color: ${colors.lightWhite};
        position: absolute;
        top: 5%;
        left: 8%;
    }

    .darkBackground {
        width: 160vw;
        height: 100vh;
        position: absolute;
        background-color: #00000081;
        z-index: -2;
        animation: ${fadeIn} 4s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    @media (max-width: 1450px) {
        .menu-item {
            font-size: 66px;
        } 

        .item-number {
            font-size: 18px;
        }

        .white-line {
            left: -20%;
        }
    }

    @media (max-width: 1000px) {
        width: 60vw;

        .sidebarBackground {
            width: 60vw;
            animation: ${scaleUpMenuMedium} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .leaves1 {
            width: 20vw;
            height: 28vw;
            top: -5%;
        }

        .leaves2 {
            width: 18vw;
            height: 26vw;
        }
    }

    @media (max-width: 750px) {
        width: 100vw;

        .sidebarBackground {
            width: 100vw;
            animation: ${scaleUpMenuLarge} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .menu-item {
            font-size: 48px;
        } 
        
        .menu-item-container {
            position: relative;
            right: -10%;
        }

        .item-number {
            font-size: 15px;
        }

        .white-line {
            left: -20%;
        }

        .leaves1 {
            width: 30vw;
            height: 40vw;
            top: -4%;
        }

        .leaves2 {
            width: 40vw;
            height: 30vw;

        }

        .menu-close-button {
            width: 7vw;
            height: 7vw;
        }

    }

`;

export default Sidebar;