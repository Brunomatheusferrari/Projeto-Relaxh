import styled from "styled-components";
import colors from "../../themes/colors";
import Leaves3 from "../../static/img/leaves3.png";
import leaves8 from "../../static/img/leaves8.png"
import leaves10 from "../../static/img/leaves10.png"
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
    
    .backButton {
        color: ${colors.lightWhite};
        font-size: 40px;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 80px;
        margin-left: 100px;
    }


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
        font-weight: bold;
        font-size: 70px;
        height: 3vh;
        margin-top: 0;
        text-align: left;
    }

    .aboutContent {
        color : ${colors.lightWhite};
        font-size: 18px;
        width: 65%;
        text-align: justify;
        
    }

    .aboutContainerText {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: left;
        background-color: ${colors.mediumGreen};
        padding: 60px;
        border-radius: 10px;
        position: relative;
    }

    .leaves1 {
        width: 10vw;
        height: 9.5vw;
        background-image: url(${leaves10});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        display: flex;
        align-self: flex-start;
        bottom: 0%;
        flex-direction: column;
        right: 12%;
        transform: rotate(95deg);
    }

    .leaves2 {
        width: 10vw;
        height: 9.5vw;
        background-image: url(${leaves10});
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        display: flex;
        align-self: flex-start;
        top: 0%;
        flex-direction: column;
        left: 12%;
        transform: rotate(-95deg);
        display: none;
    }

    .creatorsContainer {
        position: relative;
        top: 2%;
    }

    .cretorsTitle {
        color : ${colors.lightWhite};
        font-family: 'Cormorant';
        font-weight: bold;
        font-size: 45px;
        height: 5vh;
        
        
    }

    .creatorsUL {
        color: ${colors.lightWhite};
        font-size: 22px;
        padding: 0px;
        list-style: none;
        
    }

    .creatorsLI {
        height: 5vh;
        font-size: 22px;
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

    .creators-cards {
        display: flex;
    }

    .creators-card-1 {
        width: 10vw;
        height: 15vw;
        background-color: ${colors.mediumGreen};
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        margin-right: 30px;
        transition-duration: .5s;

        &:hover {
            transform: scale(1.1);
            box-shadow: 0px 0px 44px 10px #00000078;
        }
    }

    .card-name-2 {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 1.5vh;
        margin-top: 30px;
        margin-bottom: 25px;
    }

    .sobre-img {
        width: 10vw;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .card-name {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 1.8vh;
        margin-top: 30px;
        margin-bottom: 25px;
    }

    .subtitle {
        font-family: 'Cormorant', serif;
        font-weight: 500;   
        margin: 0px ;
    }

    .card-leaves {
        position: absolute;
        background-image: url(${leaves8});
        background-size: cover;
        background-repeat: no-repeat;
        width: 2vw;
        height: 2vw;
        bottom: 0;
        right: 0%;
    }

    .card-leaves-2 {
        position: absolute;
        background-image: url(${leaves8});
        background-size: cover;
        background-repeat: no-repeat;
        width: 2vw;
        height: 2vw;
        bottom: 0;
        left: 0%;
        transform: scaleX(-1);
    }

    @media (max-width: 2100px) {
        .creators-card-1 {
            width: 11vw;
            height: 17vw;
        }
        
        .sobre-img {
            width: 11vw;
        }
    }

    @media (max-width: 1700px) {
        .leavesPng {
            width: 28vw;
            height: 26vw;
            right: -10%;
        }

        .hyperwTeam {
            position: relative;
            top: 8%;
        }

        .subtitle {
            font-size: 15px;
        }

        .aboutTitle {
            font-size: 45px;
        }

        .cretorsTitle {
            font-size: 35px;
        }

        .creatorsContainer {
            margin-left: 20px;
        }

        .leaves1 {
            width: 15vw;
            height: 14.5vw;
            right: 8%;
        }

        .card-name {
            margin-bottom: 1vh;
        }
        
        .card-name-2 {
            margin-bottom: 1vh;
        }
    }

    @media (max-width: 1350px) {
        .card-name {
            margin-bottom: 0px;
        }

        .card-name-2 {
            margin-bottom: 0px;
        }
    }


    @media (max-width: 1100px) {
        flex-direction: column;
        overflow: scroll;
        height: fit-content;
        position: relative;

        .creatorsContainer {
            width: 100%;
            position: relative;
        }

        .contentAdjust {
            width: 100%;
        }

        .aboutTitle {
            margin-bottom: 15px;
        }

        .aboutContainerText {
            width: fit-content;
            height: 60vh;
            margin: 0;
            position: relative;
            align-items: center;
            justify-content: flex-start;
        }

        .cretorsTitle {
            text-align: center;
        }

        .creators-cards {
           flex-direction: column;
           display: flex;
           align-items: center;
           margin-right: 0;
        }

        .creators-card-1 {
            margin-right: 0;
            margin-bottom: 30px;
            width: 35vw;
            height: 50vw;
            background-color: ${colors.mediumGreen};
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            margin-right: 30px;
            transition-duration: .5s;
        }

        .card-name {
            font-size: 3vw;
            margin-bottom: 15px;
        }

        .card-name-2 {
            font-size: 3vw;
            margin-bottom: 15px;
        }

        .subtitle {
            font-size: 2vw;
        }

        .sobre-img {
            width: 35vw;
        }

        .aboutContent {
            margin: 0;
            font-size: 10px;
        }

        .card-leaves {
            width: 7vw;
            height: 7vw;
        }
        
        .card-leaves-2 {
            width: 7vw;
            height: 7vw;
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
            font-size: 18px;
            width: 90%;
        }
        
        .contentContainer {
            height: fit-content;
           
        }

        .leaves1 {
            right: 35%;
            width: 20vw;
            height: 20vw;
        }
        
    }

    @media (max-width: 850px) {
        .contentContainer {
            display: flex;
            align-items: center;
        }

        .aboutContainerText {
            width: 90%;
            right: 12%; 
        }

        .leaves1 {
            right: 35%;
            width: 17vw;
            height: 17vw;
        }

        
        .backButton {
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 30px;
            margin-left: 30px;
            font-size: 40px;
        }
    }

    @media (max-width: 640px) {
        .aboutContainerText {
            width: 100%;
            right: 15%; 
        }

        .hyperwTeam {
            bottom: 40%;
        }

    }

    @media (max-width: 470px) {
        .aboutContainerText {
            width: 60vw;
            height: 55vh;
            left: -35%;
            align-items: center;
            justify-content: center;
        }

        .leaves1 {
            width: 30vw;
            height: 30vw;
            right: 0;
        }

        .leaves2 {
            display: flex;
            width: 30vw;
            height: 30vw;
            left: 0;
        }

        .creators-card-1 {
            width: 85vw;
            height: 120vw;
        }

        .sobre-img {
            width: 85vw;
        }

        .aboutTitle {
            font-size: 40px;
        }

        .aboutContent {
            font-size: 15px;
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