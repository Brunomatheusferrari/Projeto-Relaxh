import styled from "styled-components";
import colors from "../../themes/colors";

export const ServicoLimpeza = styled.div`
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
        display: flex;
    }
    .dash {
        border-left: 2px solid white;
        padding: 30px;
        margin-left: 60px;
    }
    .cleanerSpray {
        width: 3vw;
        height: 3vw;
        background-image: url("https://i.imgur.com/4HdoMuR.png");
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
        align-items: center;
        width: 35vw;
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
        background-image: url("https://i.imgur.com/fwFeMRz.png");
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
        background-image: url("https://i.imgur.com/YJBmYS3.png");
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
        background-image: url("https://i.imgur.com/YJBmYS3.png");
        background-repeat: no-repeat;
        background-size: 100%;
        position: absolute;
        top: -10%;  
        left: 0%;
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
        background-image: url("https://i.imgur.com/fwFeMRz.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .leaves2Png {
        width: 13vw;
        height: 18vw;
        filter: brightness(160%);
        background-image: url("https://i.imgur.com/YJBmYS3.png");
        background-repeat: no-repeat;
        background-size: 100%;
    }
    .buttonCelphone {
        display: none;
    }
    @media (max-width: 1250px) {
    .title {
        font-size: 30px;
        justify-content: flex-start;
    }
    .dash {
        padding: 20px;
        margin-left: 45px;
    }
    .cleanerSpray {
        width: 4vw;
        height: 4vw;
    }
    }
    @media (max-width: 900px) {
    .cleanerSpray {
        width: 6vw;
        height: 5vw;
    }
    }
    @media (max-width: 768px) {
    .title {
        font-size: 30px;
    }
    .dash {
        padding: 20px;
    }
    .cleanerSpray {
        width: 9vw;
        height: 6vw;
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
    .title {
        font-size: 30px;
    }
    .dash {
        padding: 20px;
        margin-left: 45px;
    }
    .cleanerSpray {
        width: 10vw;
        height: 3vw;
    }
    .Big-Container {
        width: 100vw;
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
    }

    .texts {
        width: 90%;
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
        font-size: 30px;
        margin: 0px;
    }
    .dash {
        padding: 30px;
        margin-left: 50px;
    }
    .cleanerSpray {
        width:15vw;
        height: 12vw;
    }
    .leaves3Png {
        width: 14vw;
        height: 20vw;
        right: 0%;
    }
    .leaves4Png {
        width: 20vw;
        height: 29vw;
    }
    .leaves5Png {
        width: 14vw;
        height: 15vw;
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
@media (max-width: 669px) {
    .title {
        width: 240px;
        font-size: 30px;
        justify-content: flex-start;
    }
    .dash {
        padding: 20px;
        margin-left: 45px;
    }
    .cleanerSpray {
        width: 5vw;
        height: 8vw;
    }
    .texts {
        justify-content: center;
    }
    }
    @media (max-width: 590px) {
    .title {
        width: 240px;
        font-size: 30px;
    }
    .dash {
        padding: 20px;
        margin-left: 45px;
    }
    .cleanerSpray {
        width: 14vw;
        height: 9vw;
    }
    }
    @media (max-width: 300px) {
    .title {
        width: 240px;
        font-size: 20px;
    }
    .dash {
        padding: 20px;
        margin-left: 45px;
    }
    .cleanerSpray {
        width: 20vw;
        height: 10vw;
    }
    }
`;