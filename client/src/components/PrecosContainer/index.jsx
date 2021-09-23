import styled from "styled-components";
import colors from "../../themes/colors";
import leaves4 from "../../static/img/leaves4.png"

export const PrecosContainer =  styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${colors.darkGreen};
    position: relative;
    overflow: hidden;

    .precosTitle {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 60px;
        position: relative;
        top: -80px;
    }
    
    .cards {
        display: flex;
    }

    .cardPreco {
        margin-left: 60px;
       
    }

    .leaves {
        width: 14vw;
        height: 10vw;
        background-image: url(${leaves4});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        justify-self: flex-end;
        position: absolute;
        margin: 0;
        left: -2%;
        bottom: -1%;
        transform: rotate(0deg);
    }

    
    .leaves2 {
        width: 12vw;
        height: 8vw;
        background-image: url(${leaves4});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        justify-self: flex-end;
        position: absolute;
        margin: 0;
        right: 0;
        bottom: -1%;
        transform: rotate(20deg);
        transform: scaleX(-1);
    }

    
    .leaves3 {
        width: 12vw;
        height: 8vw;
        background-image: url(${leaves4});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        justify-self: flex-end;
        position: absolute;
        margin: 0;
        left: -2%;
        top: 0;
        transform: rotate(100deg);
    }

    
    .leaves4 {
        width: 10vw;
        height: 7vw;
        background-image: url(${leaves4});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        justify-self: flex-end;
        position: absolute;
        margin: 0;
        right: 0;
        top: 0;
        transform: rotate(180deg);
    }

    @media (max-width: 1240px) {
        width: 100%;
        overflow: scroll;
        overflow-y: none;
        height: fit-content;
        /* height: 100vh; */
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        .precosTitle {
            top: 0;
            font-size: 40px;
            margin-top: 50px;
            margin-bottom: 40px;
        }

        .cards {
            flex-direction: column;
        }

        .cardPreco {
            margin: 0;
            margin-top: 30px;
            
            &:nth-child(3) {
                margin-bottom: 50px;
            }
        }

        .leaves {
            position: absolute;
            width: 20vw;
            height: 17vw;
            bottom: -2%;
            left: -5%;
            transform: rotate(45deg);
        }

        .leaves2 {
            position: absolute;
            width: 20vw;
            height: 14vw;
            bottom: -1%;
            right: -4%;
            transform: rotate(-75deg);
        }

        .leaves3 {
            position: absolute;
            width: 20vw;
            height: 14vw;
            left: -3%;
        }

        .leaves4 {
            position: absolute;
            width: 16vw;
            height: 10vw;
        }
    }


`;