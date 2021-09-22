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
    justify-content: flex-end;
    align-items: flex-start;
    flex-direction: row-reverse;

    .contentContainer {
        display: flex;
        align-items: center;
    }
    

    .aboutTitle {
        color : ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Cormorant', serif;
        font-size: 70px;
        height: 10vh;
    }

    .aboutContent {
        color : ${colors.lightWhite};
        font-size: 30px;
        width: 30vw;
        height: 35vh;
    }

    .cretorsTitle {
        color : ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Cormorant';
        font-size: 45px;
        height: 5vh;
        
    }

    .creatorsUL {
        color: ${colors.lightWhite};
        margin-bottom: 30px;
        font-size: 25px;
        padding: 0px;
        list-style: none;
    }

    .creatorsLI {
        height: 5vh;
    }

    .contentAdjust{
        padding-left: 300px;
    }

    .leavesPng {
        
        width: 30vw;
        height: 27vw;
        background-image: url(${Leaves3});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        position: absolute;
        margin: 0;
        right: 0;
    }

    .hyperwTeam {
        width: 14vw;
        height: 20vw;
        background-image: url(${hyperwTeam});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        position: absolute;
        margin: 0;
        right: 0;
    }

`