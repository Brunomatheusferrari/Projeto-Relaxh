import styled from "styled-components";
import colors from "../../../themes/colors";
import leaves6 from "../../../static/img/leaves3.png"


export const ServicosContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .contentAjust {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80vw;
    }

    .servicosTitle {
        width: 100%;
        text-align: left;
        color: ${colors.lightWhite};
        font-family: 'Cormorant', serif;
        font-size: 64px;
        margin: 0px 0px 30px 0px;
        position: relative;
    }

    .cards {
        display: flex;
        width: 90vw;
        justify-content: space-evenly;
        z-index: 1;
        position: relative;
    }

    .leaves6 {
        width: 12vw;
        height: 12vw ;
        background-image: url("https://i.imgur.com/EyoFvc9.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 50%;
        transform: rotate(270deg);
    }

    
    .leaves7 {
        width: 12vw;
        height: 12vw ;
        background-image: url("https://i.imgur.com/EyoFvc9.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0;
        left:  0%;
        transform: rotate(90deg);
        z-index: 0;
    }

        
    .leaves8 {
        width: 8vw;
        height: 8vw ;
        background-image: url("https://i.imgur.com/EyoFvc9.png");
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0;
        left:  70%;
        transform: scaleX(-1) rotate(90deg);
        z-index: 0;
    }

    @media (max-width: 1250px) {

    }

    @media (max-width: 850px) {
        height: 100%;
        overflow: scroll;
        position: relative;

        .servicosTitle {
            font-size: 40px;
            position: relative;
            text-align: center;
            top: 0%;
            margin-top: 30px;
            
        }

        .cards {
            flex-direction: column;
            align-items: center;
            height: fit-content;
            justify-content: center;
        }
    }

    @media (max-height: 750px) {
    
    }

`;