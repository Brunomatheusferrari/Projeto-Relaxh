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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;

    .qrcode-line-text {
        width: 18vw;
        display: flex;
        align-items: center;
        position: absolute;
        top: 12%;
        right: 6%;
    }

    .qrcode-line-text-text {
        font-family: 'Cormorant', serif;
        color: ${colors.lightGreen};
        font-size: 20px;
        margin-right: 20px;
    }
    
    .qrcode-line-text-line {
        width: 60%;
        height: 1px;
        background-color: ${colors.lightGreen};
    }

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
        font-size: 3vh;
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

    @media (max-width: 1500px) {
        .qrcode-title {
            font-size: 30px;
        }
    }

    @media (max-width: 1000px) {
        .qrcode-content-container {
            width: 30%;
        }
    }
`;