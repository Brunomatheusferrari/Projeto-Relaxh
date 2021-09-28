import styled from "styled-components";
import colors from "../../themes/colors";
import Leaves3 from "../../static/img/leaves3.png";
import hyperwTeam from "../../static/img/hyperwTeam.png";


export const AboutContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    
    .contentContainer{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100vh;
    }

    .aboutTitle {
        color : ${colors.lightWhite};
        font-family: 'Cormorant', serif;
        font-size: 70px;
        height: 10vh;
        margin-top: 0;
    }

    .aboutContent {
        color : ${colors.lightWhite};
        font-size: 25px;
        width: 80%;
        
    }

    .creatorsContainer {
        position: relative;
        top: 2%;
    }

    .cretorsTitle {
        color : ${colors.lightWhite};
        font-family: 'Cormorant';
        font-size: 45px;
        height: 5vh;
        
        
    }

    .creatorsUL {
        color: ${colors.lightWhite};
        font-size: 25px;
        padding: 0px;
        list-style: none;
        
    }

    .creatorsLI {
        height: 5vh;
        font-size: 25px;
    }

    .contentAdjust {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .leavesPng {
        width: 32vw;
        height: 30vw;
        background-image: url(${Leaves3});
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        display: flex;
        align-self: flex-start;
        top: -5%;
        flex-direction: column;
        right: -4%;
    }


    .hyperwTeam {
        width: 10vw;
        height: 14vw;
        background-image: url(${hyperwTeam});
        background-repeat: no-repeat;
        background-size: 100%;
        /* order: -1; */
        right: 0px;
        bottom: 100px;
    }

    .imagesAdjust {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        right: -8%;
        height: 100vh;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        overflow: scroll;
        height: fit-content;
        position: relative;

        .creatorsContainer {
            width: fit-content;
            position: relative;
            right: -10%;
        }

        .aboutContainerText {
            width: fit-content;
            margin: 0;
            position: relative;
            right: -10%;
        }

        .aboutContent {
            margin: 0;
        }

        p {
            margin: 0;
        }

        .imagesAdjust {
            width: 80vw;
            height: fit-content;
            position: relative;
            flex-direction: row;
            justify-content: space-between;
        }

        .hyperwTeam {
            order: -1;
            width: 20vw;
            height: 24vw;
        }

        .leavesPng {
            align-self: flex-end;
            width: 52vw;
            height: 50vw;
            top: -30%;
        }

        .contentAdjust {
            height: fit-content;
            margin-top: 60px;
            
        }

        .aboutTitle {
            font-size: 60px;
            height: fit-content;
        }

        .cretorsTitle {
            font-size: 40px;
            margin-top: 60px;
        }

        .creatorsLI {
            font-size: 22px;
        }

        .aboutContent {
            font-size: 22px;
        }
        
        .contentContainer {
            height: fit-content;
           
        }
        
    }

    @media (max-width: 470px) {

        .aboutTitle {
            font-size: 40px;
        }

        .aboutContent {
            font-size: 20px;
            width: 100%;
        }

        .cretorsTitle {
            font-size: 30px;
        }

        .creatorsLI {
            font-size: 15px;
            width: 100%;
        }

        .aboutContainerText {
            right: 0;
        }

        .creatorsContainer {
            right: 0;
        }      

    }
`;