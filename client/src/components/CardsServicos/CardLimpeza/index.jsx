import styled from "styled-components";
import colors from "../../../themes/colors";
import leaves6 from "../../../static/img/leaves6.png"

export const CardLimpeza = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 25vw;
    height: 25vw;
    background-color: ${colors.mediumGreen};
    transition: 1s ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;


    &:hover {
        transform: scale(1.1);
        background-color: ${colors.lightGreen};
    }

    .deliveryCardPng {
        width: 40%;
        height: auto;
    }

    .cardTitle {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 60px;
        margin: 10px;
    }

 
    .leaves1 {
        width: 25%;
        height: 20%;
        background-image: url(${leaves6});
        background-size: cover;
        position: absolute;
        top: -2%;
        left: 0;
        z-index: 1000;
        opacity: 100%;
        transform: rotate(150deg);
    }

    
    .leaves2 {
        width: 25%;
        height: 20%;
        background-image: url(${leaves6});
        background-size: cover;
        position: absolute;
        bottom: -1%;
        right: 0;
        z-index: 1000;
        opacity: 100%;
        transform: rotate(335deg);
    }
`;