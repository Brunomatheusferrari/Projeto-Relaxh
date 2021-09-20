import styled from "styled-components";
import colors from "../../themes/colors";


export const IntroductSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 99vw;
    height: 60vh;
    background-color: ${colors.mediumWhite};
    overflow-y: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    
    .lineTextCenter {
        width: 80%;
        height: fit-content;
        position: relative;
        top: 00px;
    }

    .sectionTitle {
        width: 544px;
        height: 128px;
        left: 176px;
        top: 209px;

        font-family: 'Baskervville', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 64px;
        line-height: 83px;
        text-align: right;
        color: ${colors.lightGreen};
    }

    .contentContainer {
        display: flex;
        position: relative;
        width: 70%;
        justify-content: space-between;
        top : 70px;
    }

    .logoRelaxh {
        position: relative;
        width: 390px;
        height: 390px;
        top: -50px;
        z-index: 2;
        transform: scaleX(-1);
    }

    .bgLogo {
        width: 485px;
        height: 60vh;
        position: absolute;
        background-color: ${colors.darkWhite};
        z-index: 0;
        right: 0px;
    }
`;