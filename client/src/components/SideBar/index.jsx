import styled from "styled-components";
import colors from "../../themes/colors";
import leaves10 from "../../static/img/leaves10.png";


export const Sidebar = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 45vw;
    height: 100vh;
    background-color: ${colors.mediumGreen};
    position: fixed;
    z-index: 100000;
    display: none;
    flex-direction: column;
    justify-content:  center;
    align-items: center;

    .menu-container {
        display: flex;
        height: 40%;
        align-items: center;
    }

    .white-line {
        width: 3px;
        height: 90%;
        background-color: ${colors.lightWhite};
        position: relative;
        left: -30%;
        top: 2%;
    }

    .menu-items {
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: space-around;
        height: 100%;
    }

    .menu-item-container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
    }

    .item-number {
        font-size: 'Montserrat', sans-serif;
        margin-right: 10px;
        font-size: 20px;
    }

    .menu-item {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 76px;
        margin: 0;
    }

    .leaves1 {
        width: 12vw;
        height: 22vh;
        position: absolute;
        background-image: url(${leaves10});
        background-repeat: no-repeat;
        background-size: cover;
        top: -2%;
        right: 10%;
        transform: rotate(275deg);
    }

    
    .leaves2 {
        width: 12vw;
        height: 22vh;
        position: absolute;
        background-image: url(${leaves10});
        background-repeat: no-repeat;
        background-size: cover;
        bottom: -2%;
        left: 0%;
        transform: rotate(180deg);
        transform: scaleX(-1);
    }

    .menu-close-button {
        width: 5%;
        height: 5%;
        color: ${colors.lightWhite};
        position: absolute;
        top: 5%;
        left: 8%;
    }
`;

export default Sidebar;