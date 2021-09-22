import styled from "styled-components";
import colors from "../../themes/colors";

export const PrecosContainer =  styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkGreen};

    .precosTitle {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 60px;
        position: relative;
        top: -80px;
    }
    
    .cards {
        display: flex;
        padding: 0 60px 0 60px;
    }

    .cardPreco {
        margin-left: 60px;
    }
`;