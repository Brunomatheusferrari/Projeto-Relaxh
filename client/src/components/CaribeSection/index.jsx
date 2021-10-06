import styled from "styled-components";
import colors from "../../themes/colors";
import caribePhoto from "../../static/img/caribePhoto.png"

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
`;