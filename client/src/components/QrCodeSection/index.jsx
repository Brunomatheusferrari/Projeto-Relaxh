import styled from "styled-components";
import colors from "../../themes/colors";
import leaves12 from "../../static/img/leaves12.png"
import leaves13 from "../../static/img/leaves13.png"

export const QrCodeSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.mediumWhite};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

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
        font-size: 25px;
        text-align: justify;
    }

    .qrcode-leaves1 {
        width: 40vw;
        height: 40vw;
        background-image: url(${leaves12});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: -7%;
        right: -5%;
    }

    .qrcode-leaves2 {
        width: 40vw;
        height: 40vw;
        background-image: url(${leaves13});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: -7%;
        left: 7%;
        transform: rotate(180deg);
    }
`;