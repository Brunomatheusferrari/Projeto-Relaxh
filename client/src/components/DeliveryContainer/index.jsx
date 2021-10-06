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

    .buttonCelphone {
        display: none;
    }

    .leaves {
        width: 100vw;
        display: flex;
        position: absolute;
        justify-content: space-between;
        bottom: 0px;
        left: 0px;

    }

    .leavesPng {
        width: 12vw;
        height: 18vw;
        background-image: url(${leaves8});
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .leaves2Png {
        width: 13vw;
        height: 18vw;
        filter: brightness(160%);
        background-image: url(${leaves9});
        background-repeat: no-repeat;
        background-size: 100%;
    }

    @media (max-width: 768px) {

    .dash {
        padding: 20px;
    }

    .forkandKnife {
        width: 5vw;
        height: 7vw;
    }

    .leaves3Png {
        width: 10vw;
        height: 16vw;
        right: 30%;
    }

    .leaves4Png {
        width: 10vw;
        height: 20vw;
    }

    .leaves5Png {
        width: 7vw;
        height: 9vw;
    }
}

@media (max-width: 607px) {

    .dash {
        padding: 20px;
        margin-left: 50px;
    }

    .forkandKnife {
        width:6vw;
        height: 8vw;
    }

    .buttonHeader {
        display: none;
    }

    .buttonCelphone {
        display: block;
    }

    .headerObjects {
        justify-content: center;
    }

    .leaves3Png {
        width: 12vw;
        height: 18vw;
        right: 0%;
    }

    .leaves4Png {
        width: 11vw;
        height: 21vw;
    }

    .leaves5Png {
        width: 10vw;
        height: 12vw;
    }

    .leavesPng {
        width: 14vw;
        height: 20vw;
    }
    .leaves2Png {
        width: 14vw;
        height: 20vw;
    }
}   

@media (max-width: 425px) {

.title {
    font-size: 35px;
    margin: 0px;
}


.dash {
    padding: 20px;
    margin-left: 50px;
}

.forkandKnife {
    width:9vw;
    height: 11vw;
}

.leaves3Png {
    width: 14vw;
    height: 20vw;
    right: 0%;
}

.leaves4Png {
    width: 20vw;
    height: 31vw;
}

.leaves5Png {
    width: 14vw;
    height: 18vw;
}

.leavesPng {
    width: 20vw;
    height: 26vw;
}
.leaves2Png {
    width: 20vw;
    height: 26vw;
}
}   
`;