import styled, { keyframes } from "styled-components";
import colors from "../../themes/colors";
import caribePhoto from "../../static/img/caribePhoto.png"

const animationCardRight = keyframes`
    from {
        -webkit-transform: translateX(500px);
            transform: translateX(500px);
    }

    to {
        -webkit-transform: translateX(0);
            transform: translateX(0);
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

export const CaribeSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.mediumGreen};
    display: flex;
    align-items: center;
    justify-content: right;
    position: relative;

    .caribe-card {
        width: 28vw;
        height: 28vw;
        background-color: ${colors.darkGreen};
        position: absolute;
        left: 10%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .caribe-photo {
        width: 75%;
        height: 100%;
        background-image: url(${caribePhoto});
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: 0px;
        position: relative;
        display: flex;
        /* right: -30%; */
    }

    .caribe-card-content {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .caribe-card-title {
        color: ${colors.lightWhite};
        font-family: 'Cormorant', serif;
        font-size: 50px;
        margin-top: 60px;
        position: relative;
        top: 10%;
        margin: 0;
    }

    .caribe-card-text {
        font-family: 'Baskervville', serif; 
        width: 80%;
        font-size: 1.8vh;   
        position: relative;
        margin: 0;
    }

    .text-line {
        position: relative;
        bottom: 8%;
        width: 95%;
        display: flex;
        align-items: center;
        margin: 0;
        top: 2%;
    }

    .text {
        margin-left: 30px;
        font-family: 'Cormorant', serif; 
        color: ${colors.lightWhite};
    }

    .line {
        width: 80%;
        height: 1px;
        background-color: ${colors.lightWhite};
    }

    .animation-card {
            animation: ${animationCardRight} 4s cubic-bezier(0.075, 0.82, 0.165, 1);;
            display: flex;
        }

    @media (max-width: 1400px) {
        .caribe-card-title {
            font-size: 35px;
            margin-bottom: 30px;
        }

        .caribe-card {
            width: 32vw;
            height: 32vw;
        }
    }
    
    @media (max-width: 700px) {
        height: 115vh;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        .caribe-photo {
            width: 100vw;
            height: 80vh;
            top: -16%;
            overflow: hidden;
        }

        .caribe-card {
            width: 60vw;
            height: 70vh;
            bottom: 10%;
            /* left: 22%; */
            display: flex;
            align-self: center;
            left: 18vw;
            overflow: hidden;
        }

        .caribe-card-text {
            font-size: 2.1vw;
        }
    }

    @media (max-width: 450px) {
        .caribe-card {
            width: 60vw;
            height: 60vh;
            left: 20vw;
            overflow: hidden;
        }

        .caribe-card-text {
            font-size: 2.5vw;
            width: 100%;
            overflow: hidden;
        }
    }

    @media (max-width: 404px) {
        .caribe-card {
            width: 80vw;
            height: 50vh;
            left: 10vw;
        }

        .caribe-card-text {
            font-size: 3.2vw;
        }
    }
`;