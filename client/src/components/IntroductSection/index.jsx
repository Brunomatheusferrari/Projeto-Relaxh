import styled, { keyframes } from "styled-components";
import colors from "../../themes/colors";


const slideUp = keyframes`
    from {
        -webkit-transform: translateY(1500px);
            transform: translateY(1500px);
            opacity: 0;
    }

    to {
        -webkit-transform: translateY(0px);
            transform: translateY(0px);
            opacity: 100%;
    }
`;

const fadeIn = keyframes`
    from {
        -webkit-transform: scale(0.9);
            transform: scale(0.9);
            opacity: 0;
            -webkit-transform: translateY(100px);
            transform: translateY(100px);
    }

    to {
        -webkit-transform: scale(1.0);
            transform: scale(1.0);
            opacity: 100%;
            -webkit-transform: translateY(0px);
            transform: translateY(0px);
    }
`;



export const IntroductSection = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 55vh;
    background-color: ${colors.mediumWhite};
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;


    .sectionTitle {
        width: 35%;
        font-family: 'Baskervville', serif;
        font-style: normal;
        font-weight: normal;
        font-size: 3vw;
        line-height: 83px;
        text-align: right;
        color: ${colors.lightGreen};
        margin: 15px;
    }

    .contentContainer {
        display: flex;
        position: relative;
        width: 70%;
        justify-content: space-around;
        align-items: center;
        top : 70px;
        height: fit-content;
        top: 0;
        transform-style: inherit; 
    }

    .logoRelaxh {
        position: relative;
        width: 20vw;
        height: 20vw;
        z-index: 2;
    }

        .bgLogo {
            width: 31%;
            height: 100%;
            position: absolute;
            background-color: ${colors.darkWhite};
            z-index: 0;
            right: 0px;
        }

        .animationLogo {
            animation: ${slideUp} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }

        .animationText {
            animation: ${fadeIn} 1.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        }


        @media (max-width: 1500px) {
            .sectionTitle {
                width: 47%;
                font-size: 4vw;
            }

            .logoRelaxh {
                width: 22vw;
                height: 22vw;
            }

            .bgLogo {
                width: 29.5%;
            }
        }

        @media (max-width: 750px) {
            height: 50vh;
             /* flex-direction: column;

            .contentContainer {
                flex-direction: column;
            } */

            .sectionTitle {
                position: relative;
                text-align: right;
                font-size: 5vw;
                width: 80%;
                left: -5%;
                line-height: 180%;
            }

            .bgLogo {
               width: 26% ;
            }  
        }

        @media (max-width: 404px) {
            height: 90vh;

            .contentContainer {
                flex-direction: column;
            }

            .bgLogo {
                width: 100vw;
                top: 62vh;
                left: 0;
            }

            .sectionTitle {
                font-size: 8vw;
                width: 100%;
            }

            .logoRelaxh {
                width: 70vw;
                height: 70vw;
                top: 8vh;
            }
        }
`;