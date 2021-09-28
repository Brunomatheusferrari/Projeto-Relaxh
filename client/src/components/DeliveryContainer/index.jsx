import styled from "styled-components";
import colors from "../../themes/colors";
import leaves8 from "../../static/img/leaves8.png";
import leaves9 from "../../static/img/leaves9.png";
import forkandKnife from "../../static/img/forkandKnife.png";

export const DeliveryContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .header {
        width: 100vw;
        height: 15vh;
        background-color: ${colors.lightGreen};
        position: absolute;
        display: flex;
        align-items: center;
        top: 0px;
        left: 0px;
    }

    .title {
        margin: 0px;
    }

    .dash {
        border-left: 2px solid white;
        padding: 30px;
        margin-left: 60px;
    }

    .forkandKnife {
        width: 3vw;
        height: 4vw;
        background-image: url(${forkandKnife});
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .headerObjects {
        width: 80vw;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .texts {
        display: flex;
    }

    .leavesHeader {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .leaves3Png {
        width: 5vw;
        height: 8vw;
        filter: brightness(60%);
        transform: rotate(180deg);
        background-image: url(${leaves8});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: -10%;
        right: 35%;
    }

    .leaves4Png {
        width: 6vw;
        height: 12vw;
        filter: brightness(60%);
        transform: rotate(125deg);
        background-image: url(${leaves9});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: -50%;  
    }

    .leaves5Png {
        width: 4vw;
        height: 6vw;
        filter: brightness(60%);
        transform: rotate(125deg);
        background-image: url(${leaves9});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: -10%;  
        left: 0%;
    }

    .leavesPng {
        width: 12vw;
        height: 18vw;
        background-image: url(${leaves8});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 0%;
        right: -3%;
    }
    .leaves2Png {
        width: 12vw;
        height: 17vw;
        filter: brightness(160%);
        background-image: url(${leaves9});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        bottom: 0%;
        left: -4%;
    }
`;