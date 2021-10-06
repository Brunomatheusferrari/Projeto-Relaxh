import styled from "styled-components";
import colors from "../../themes/colors";
import leaves14 from "../../static/img/leaves14.png"

export const ReserveSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    .reserve-content-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    .reserve-title {
        color: ${colors.lightWhite};
        font-family: 'Cormorant', serif;
        font-size: 55px;
        font-weight: 200;
        text-align: center;
    }

    .reserve-inputs {
        display: flex;
        justify-content: space-around;
        width: 70vw;
    }

    .input-title {
        color: ${colors.lightWhite};
        font-family: 'Baskervville', serif;
        font-size: 25px;
    }

    .leaves1 {
        width: 24vw;
        height: 22vw;
        background-image: url(${leaves14});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -8%;
        left: -5%;
        transform: rotate(130deg);
    }

    .leaves2 {
        width: 24vw;
        height: 22vw;
        background-image: url(${leaves14});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -8%;
        right: -5%;
        transform: rotate(310deg);
    }

    .reserve-white-line-1 {
        height: 1px;
        width: 80%;
        background-color: ${colors.lightWhite};
        position: absolute;
        top: 10%;
        left: 0;
        opacity: 50%
    }

    
    .reserve-white-line-2 {
        height: 1px;
        width: 80%;
        background-color: ${colors.lightWhite};
        position: absolute;
        bottom: 10%;
        right: 0;
        opacity: 50%
    }

    .reserve-button {
        margin-top: 210px;
    }

`;