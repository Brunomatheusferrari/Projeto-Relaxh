import styled from "styled-components";
import colors from "../../themes/colors";
import premiumRoom from "../../static/img/premiumRoom.png";

export const RoomsSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;

    .rooms-background {
        width: 100vw;
        height: 100vh;
        background-image: url(${premiumRoom});
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        z-index: 0;
    }

    .rooms-container {
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        width: 100vw;
        height: 30vh;
        background: linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 96.37%);
        padding: 0px 150px 40px 150px;
        position: relative;
        
    }

    .room-content-container {
        z-index: 1000;
    }

    .room-title {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 72px;
        margin: 10px;
        position: relative;
        top: -5%;
    }

    .room-list {
        color: ${colors.lightWhite};
        font-family: 'Baskervville', serif;
        font-size: 25px;
        position: relative;
        bottom: 10%;
    }

    .vertical-white-line {
        width: 1.5px;
        height: 80%;
        background-color: ${colors.lightWhite};
        z-index: 1000;
    }

    @media (max-width: 1400px) {
        .room-title {
            font-size: 50px;
        }

        .room-list {
            font-size: 18px;
        }
    }

`;