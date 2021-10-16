import styled, { keyframes } from "styled-components";
import colors from "../../themes/colors";


const animationCardLeft = keyframes`
    from {
        -webkit-transform: translateX(-500px);
            transform: translateX(-500px);
    }

    to {
        -webkit-transform: translateX(0);
            transform: translateX(0);
    }
`;

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



export const  CardsSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 290vh;
    background-color: ${colors.darkGreen};
    overflow-y: none;

    .divider {
        width: 100vw;
        height: 90vh;
        display: flex;
        justify-content: right;
        align-items: center;
        position: relative;

        &:nth-child(1) {
            padding-top: 100px;
        }
    }

    .line-text {
        position: absolute;
        top: 16%;
        right: 16%;
        display: flex;
        align-items: center;
        width: 24vw;
    }

    .line-text2 {
        position: absolute;
        top: 3%;
        left: 13%;
        display: flex;
        align-items: center;
        width: 24vw;
    }


    .line-text3 {
        position: absolute;
        top: 3%;
        right: 16%;
        display: flex;
        align-items: center;
        width: 24vw;
    }

    .text {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        letter-spacing: 0.395em;
        margin-right: 20px
    }

    .text2 {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        letter-spacing: 0.395em;
        margin-left: 20px
    }


    .line {
        width: 90%;
        height: 1px;
        background-color: ${colors.lightWhite};
    }

    .card-photo {
        width: 50vw;
        height: auto;
        position: relative;
        right: 15%;
        z-index: 500;
    }

    .card-photo-3 {
        width: 50vw;
        height: auto;
        position: relative;
        right: 15%;
        z-index: 500;
    }


    .card {
        width: 30vw;
        height: 28vw;
        background-color: ${colors.mediumGreen};
        z-index: 1000;
        position: relative;
        left: -7%;
        box-shadow: 0px 0px 188px 20px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .card-3 {
        width: 30vw;
        height: 28vw;
        background-color: ${colors.mediumGreen};
        z-index: 1000;
        position: relative;
        left: -7%;
        box-shadow: 0px 0px 188px 20px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .white-line {
        width: 100vw;
        height: 1px;
        background-color: ${colors.lightWhite};
        position: absolute;
        opacity: 20%;
    }

    .card-container {
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .card-title {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 52px;
        margin: 0;
        position: relative;
        top: -10%;
        left: -2%;
    }

    .card-white-line {
        width: 100%;
        height: 1px;
        background-color: ${colors.lightWhite};
        position: relative;
        top: -7%;
        opacity: 50%;
    }

    .card-text {
        font-family: 'Baskervville', serif;
        width: 100%;
        font-size: 2vh;
        position: relative;
        top: 2%;
    }

    .card-2 {
        width: 30vw;
        height: 28vw;
        background-color: ${colors.mediumGreen};
        z-index: 1000;
        position: relative;
        right: -35%;
        box-shadow: 0px 0px 188px 20px rgba(0, 0, 0, 0.4);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    }

    .card-photo-2 {
        width: 50vw;
        height: auto;
        position: relative;
        left: -37%;
        z-index: 500;
    }

    .animation-card {
            animation: ${animationCardLeft} 3s cubic-bezier(0.075, 0.82, 0.165, 1);
            display: flex;
        }

    .animation-card-2 {
            animation: ${animationCardRight} 3s cubic-bezier(0.075, 0.82, 0.165, 1);
            display: flex;
    }


    @media (max-width: 1400px) {
        overflow: hidden;
        .card-title {
            font-size: 40px;
        }

        .card {
            width: 32vw;
            height: 30vw;
        }

        .card-3 {
            width: 32vw;
            height: 30vw;
        }
    }

    @media (max-width: 1000px) {
        overflow: hidden;
        .card-title {
            font-size: 30px;
        }


        .card-2 .card-title {
            top: -5%;
        }

        .card-2 .card-white-line {
            top: -3%;
        }

        .line-text:nth-child(1) {
            top: 22%;
        }

        .line-text {
            display: none;
        }

        .line-text2 {
            display: none;
        }
        
        .line-text3 {
            display: none;
        }
    }

    @media (max-width: 700px) {
        height: 340vh;

        .divider {
            flex-direction: column-reverse;
            
            &:nth-child(2) {
                margin-top: 20vw;
            }

            &:nth-child(3) {
                margin-top: 20vw;
            }
        }

        .card-photo {
            width: 100vw;
            left: 0;
            position: relative;
            top: -10%;
        }

        .card-photo-3 {
            width: 100vw;
            left: 0;
            position: relative;
            top: -10%;
        }

        .card {
            top: -50%;
            left: 0vw;
            width: 55vw;
            min-height: 55vh;
        }

        .card-3 {
            top: -50%;
            left: 0vw;
            width: 55vw;
            min-height: 55vh;
        }

        .card-photo-2 {
            width: 100vw;
            left: 0;
            top: -10%;
            position: relative;
        }

        .card-2 {
            top: -50%;
            left: 0vw;
            width: 55vw;
            min-height: 55vh;
        }
    }

    @media (max-width: 600px) {
        height: 260vh;

        .divider {
            height: 73vh;
        }
        .card {
            width: 85vw;
            min-height: 45vh;
            top: -18%;
        }

        .card-2 {
            width: 85vw;
            min-height: 45vh;
            top: -18%;
        }

        .card-3 {
            width: 85vw;
            min-height: 45vh;
            top: -18%;
        }
    }
    
    @media (max-width: 404px) {

        height: 250vh;

        .divider {
            flex-direction: column-reverse;
            height: 80vh;
            
            &:nth-child(2) {
                margin-top: 0vw;
            }

            &:nth-child(3) {
                margin-top: 0vw;
            }
        }

        .card {
            top: -25%;
            width: 80vw;
            min-height: 45vh;
        }

        
        .card-3 {
            top: -25%;
            width: 80vw;
            min-height: 45vh;
        }

        .card-text {
            font-size: 3.8vw;
        }

        .card-2 {
            top: -25%;
            width: 80vw;
            min-height: 45vh;
        }
    }
`;