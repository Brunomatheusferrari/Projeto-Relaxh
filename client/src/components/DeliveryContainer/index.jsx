import styled from "styled-components";
import colors from "../../themes/colors";
import leaves8 from "../../static/img/leaves8.png";
import leaves9 from "../../static/img/leaves9.png";

export const DeliveryContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;

    .header {
        width: 100vw;
        height: 20vh;
        background-color: ${colors.lightGreen};
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0px;
        left: 0px;
    }

    .leavesPng {
        width: 12vw;
        height: 18vw;
        background-image: url(${leaves8});
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        bottom: 0%;
        right: -30%;
    }
    .leaves2Png {
        width: 12vw;
        height: 17vw;
        filter: brightness(160%);
        background-image: url(${leaves9});
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        bottom: 0%;
        left: -34%;
    }
`;