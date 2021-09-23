import styled from "styled-components";
import colors from "../../themes/colors";
import Leaves3 from "../../static/img/leaves3.png";
import Leaves5 from "../../static/img/leaves5.png";
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
    
    .contentContainer{
      width: 80vw;
      height: 80vh;
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
        font-size: 30px;
        
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
    }

    .contentAdjust {
        
    }

    .leavesPng {
        width: 35vw;
        height: 37vw;
        background-image: url(${Leaves3});
        background-repeat: no-repeat;
        background-size: 100%;
        /* order: -1; */
        position: absolute;
        top: 60px;
        right: 0;
    }

    

    .hyperwTeam {
        width: 10vw;
        height: 14vw;
        background-image: url(${hyperwTeam});
        background-repeat: no-repeat;
        background-size: 100%;
        /* order: -1; */
        position: absolute;
        right: 00px;
        bottom: 100px;
    }

    @media (max-width: 768px) {
        .leavesPng {
            width: 35vw;
            height: 40vw;
        }

        .hyperwTeam {
            width: 160px;
            height: 250px;
            
            right: 150px;
            bottom: 60px;
        }

        }

    @media (max-width: 425px) {


    

    .aboutTitle {
        text-align: center;
        font-size: 50px;
    }

    .aboutContent {
        font-size: 25px;
        
    }

    .cretorsTitle {
        font-size: 30px;   
    }

    .creatorsUL {
        font-size: 15px; 
    }


    .leavesPng {
        background-image: url(${Leaves5});
        width: 105vw;
        height: 122vw;
        top: 200px;
        right: 0;
    }

    .hyperwTeam {
        width: 30vw;
        height: 34vw;
        background-image: url(${hyperwTeam});
        background-repeat: no-repeat;
        background-size: 100%;
        /* order: -1; */
        position: absolute;
        right: 50;
        bottom: 50px;

        z-index:-1;
    }
        

        }
`