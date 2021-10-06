import styled from "styled-components";
import colors from "../../themes/colors";


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
    }

    .logoRelaxh {
        position: relative;
        width: 20vw;
        height: 20vw;
        z-index: 2;
        transform: scaleX(-1);
    }

        .bgLogo {
            width: 31%;
            height: 100%;
            position: absolute;
            background-color: ${colors.darkWhite};
            z-index: 0;
            right: 0px;
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
`;