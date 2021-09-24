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
        height: 80vh;
    }

    .servicosTitle {
        width: 100%;
        text-align: left;
        color: ${colors.lightWhite};
        font-family: 'Cormorant', serif;
        font-size: 64px;
        margin: 0px 0px 30px 0px;
        position: relative;
        top: -10%;

    }

    .cards {
        display: flex;
        width: 90vw;
        justify-content: space-around;
    }

    .leaves6 {
        width: 12vw;
        height: 12vw ;
        background-image: url(${leaves6});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        top: 0;
        left: 50%;
        transform: rotate(270deg);
    }

    
    .leaves7 {
        width: 14vw;
        height: 14vw ;
        background-image: url(${leaves6});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0;
        left:  0%;
        transform: rotate(90deg);
    }

        
    .leaves8 {
        width: 10vw;
        height: 10vw ;
        background-image: url(${leaves6});
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        bottom: 0;
        left:  70%;
        transform: scaleX(-1) rotate(90deg);
    }

`;