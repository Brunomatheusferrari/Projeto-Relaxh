import styled from "styled-components";
import colors from "../../themes/colors";
import Leaves1 from "../../static/img/leaves1.png"
 

export const LoginContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .wrapper {
        height: 100vh;
        display: flex ;
        flex-direction: row;
        flex: 1;
        
        align-items: center;
        justify-content: center;
        position: relative;

        
    }

    .input1 {
        margin-bottom: 20px;
    }

    .input2 {
        margin-bottom: 20px;
    }

    .leavesPng {
        width: 14vw;
        height: 12vw;
        background-image: url("https://i.imgur.com/1tJPyLi.png");
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        position: absolute;
        margin: 0;
        left: 0;
    }

    .leavesPng2 {
        width: 14vw;
        height: 12vw;
        background-image: url("https://i.imgur.com/1tJPyLi.png");
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-start;
        position: absolute;
        margin: 0;
        right: 0;
        transform: rotate(180deg);
    }

    .loginTitle {
        color : ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Cormorant', serif;
        font-size: 50px;
    }

    .contentAdjust {
        display: flex;
        flex-direction: column;
        width: 300px;
        justify-content: center;
    }

    .perfilImg {
        height: 100%;
    }

    .containerInputs {
        margin-bottom: 25px;
    }

    .passwordRecover {
        font-family: 'Cormorant', serif;
        color : ${colors.lightWhite};
        margin-top: 80px;
        font-size: 18px;
    }

    .backButton {
        color: ${colors.lightWhite};
        font-size: 40px;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 60px;
        margin-left: 60px;
    }

    .backButtonContainer {
        width: 100%;
        height: 40px;
    }

    .linkContato {
        text-decoration: none;
        color: ${colors.lightWhite};
    }

    strong {
        border-bottom: 2px dotted ${colors.lightWhite};
        margin-left: 5px;

        &:hover {
            cursor: pointer;
        }
    }

    @media (max-width: 1200px) {
        .perfilImg {
            display: none;
        }

        .loginTitle {
            font-size: 35px;
        }

        input {
            width: 250px;
        }

        .backButton {
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 30px;
            margin-left: 30px;
            font-size: 40px;
        }

        .leavesPng {
            width: 24vw;
            height: 22vw;
        }

        .leavesPng2 {
            width: 24vw;
            height: 22vw;
        }

    }
`;