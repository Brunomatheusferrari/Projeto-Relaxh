import styled from "styled-components";
import colors from "../../themes/colors";

export const AboutContainer = styled.div `
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    .aboutTitle {
        color : ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Cormorant', serif;
        font-size: 70px;
        height: 10vh;
    }

    .aboutContent {
        color : ${colors.lightWhite};
        font-family: 'Barskervville';
        font-size: 30px;
        width: 30vw;
        height: 35vh;
    }

    .cretorsTitle {
        color : ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Cormorant';
        font-size: 45px;
        height: 5vh;
        
    }

    .creatorsUL {
        color: ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Barskevville';
        font-size: 25px;
        padding: 0px;
        list-style: none;
    }

    .creatorsLI {
        height: 5vh;
    }

    .contentAdjust{
        padding-left: 120px;
    }
`