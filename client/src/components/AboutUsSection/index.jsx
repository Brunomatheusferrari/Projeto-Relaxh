import styled, { keyframes } from "styled-components";
import colors from "../../themes/colors";

const fadeIn = keyframes`
    from {
        -webkit-transform: scale(0.9);
            transform: scale(0.9);
            opacity: 0;
    }

    to {
        -webkit-transform: scale(1.0);
            transform: scale(1.0);
            opacity: 100%;
    }
`;

const slideIn = keyframes`
    from {
        -webkit-transform: translatex(1500px);
            transform: translatex(1500px);
            opacity: 0;
    }

    to {
        -webkit-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 100%;
    }
`;

export const AboutUsSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 55vh;
    background-color: ${colors.mediumWhite};
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;

    .about-us-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .about-us-title {
        font-family: 'Cormorant', serif;
        font-style: normal;
        font-weight: 800;
        font-size: 5vh;
        color: ${colors.lightGreen};
    }

    .about-us-text {
        width: 30%;
        font-family: 'Baskervville', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2vh;
        color: ${colors.lightGreen};
        text-align: center;
    }

    .about-us-detail {
        font-family: 'Baskervville', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 2vh;
        line-height: 23px;
        letter-spacing: 0.395em;
        color: ${colors.lightGreen};
    }
    .about-us-line {
        width: 42%;
        height: 1px;
        background-color: ${colors.lightGreen};
        position: absolute;
        right: 0;
        bottom: 21%;
    }

    .leaves-about-us {
        width: 12vw;
        height: 20vw;
        position: absolute;
        background-image: url("https://i.imgur.com/dzUbdxl.png");
        background-size: cover;
        background-repeat: no-repeat;
        left: 12%;
        bottom: 0;
    }

    .animationText {
            animation: ${fadeIn} 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    
    .animationLine {
            animation: ${slideIn} 3s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    @media (max-width: 700px) {
        height: 70vh;
     
        .about-us-text {
            width: 79%;
        }

        .about-us-line {
            bottom: 23%;
            width: 20%;
        }
    }


    @media (max-width: 404px) {
        height: 100vh;

        .about-us-text {
            width: 80%;
            font-size: 5vw;
        }

        .about-us-detail {
            position: relative;
            top: 8vh;
        }

        .about-us-line {
            top: 82%;
            width: 20%;
            box-sizing: border-box;
        }
    }
`;