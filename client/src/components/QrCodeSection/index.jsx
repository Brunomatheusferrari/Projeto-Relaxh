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


export const QrCodeSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.mediumWhite};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    .qrcode-line-text {
        width: 18vw;
        display: flex;
        align-items: center;
        position: absolute;
        top: 12%;
        right: 6%;
    }

    .qrcode-line-text-text {
        font-family: 'Cormorant', serif;
        color: ${colors.lightGreen};
        font-size: 20px;
        margin-right: 20px;
    }
    
    .qrcode-line-text-line {
        width: 60%;
        height: 1px;
        background-color: ${colors.lightGreen};
    }

    .qrcode-content-container {
        width: 70%;
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .qrcode-title {
        font-family: 'Cormorant', serif;
        color: ${colors.lightGreen};
        font-size: 40px;
    }

    .qrcode-text {
        font-family: 'Baskervville', serif;
        color: ${colors.lightGreen};
        font-size: 3vh;
        text-align: justify;
    }

    .qrcode-leaves1 {
        width: 40vw;
        height: 40vw;
        background-image: url("https://i.imgur.com/witnuL1.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -7%;
        right: -5%;
    }

    .qrcode-leaves2 {
        width: 40vw;
        height: 40vw;
        background-image: url("https://i.imgur.com/sA4w4mU.png");
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -7%;
        left: 7%;
        transform: rotate(180deg);
    }

    
    .animationText {
            animation: ${fadeIn} 2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }


    @media (max-width: 1500px) {
        .qrcode-title {
            font-size: 30px;
        }
    }

    @media (max-width: 1000px) {
        .qrcode-content-container {
            width: 30%;
        }
    }

    @media (max-width: 700px) {
        height: 130vh;

     .qrcode-content-container {
            width: 45%;
     }

     .qrcode-line-text {
         top: 8%;
         width: 30%;
     }

     .qrcode-line-text-text {
         width: 60%;
         font-size: 15px;
     }
    
    }

    @media (max-width: 650px) {
        height: 100vh;

        .qrcode-content-container {
            width: 80%;
        }

        .qrcode-text {
            font-size: 5vw;
        }
    }

    @media (max-width: 404px) {
        height: 100vh;

        .qrcode-content-container {
            width: 65%;
        }

        .qrcode-text {
            font-size: 5vw;
        }

        .qrcode-line-text {
            top: 5%;
        }

        .qrcode-line-text-text {
            width: 100%;
        }

        .qrcode-leaves1 {
            width: 50vw;
            height: 50vw;
        }

        .qrcode-leaves2 {
            width: 50vw;
            height: 50vw;
        }
    }
`;