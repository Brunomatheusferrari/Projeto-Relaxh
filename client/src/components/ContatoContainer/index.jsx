import styled from "styled-components";
import colors from "../../themes/colors";
import leaves2 from "../../static/img/leaves2.png"

export const ContatoContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.lightGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .contatoContainer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contatoTitle {
        width: 100%;
        text-align: center;
        font-family: 'Cormorant', serif;
        font-weight: bold;
        font-size: 40px;
        margin: 0 0 20px 0;
        z-index: 1;
    }

    .buttonContainer {
        width: 100%;
        display: flex;
        justify-content: center;
        z-index: 1;
    
    }

    .loginButtonStyle {
        margin: 0;
        z-index: 1;
    }
    
    .leaves {
        width: 35vw;
        height: 37vw;
        background-image: url(${leaves2});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        position: absolute;
        margin: 0;
        left: 5%;
    }

    .leaves2 {
        width: 30vw;
        height: 32vw;
        background-image: url(${leaves2});
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        /* order: -1; */
        align-self: flex-end;
        position: absolute;
        margin: 0;
        right: 5%;
        transform: scaleX(-1);
    }

    .backButton {
        color: ${colors.lightWhite};
        font-size: 40px;
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 80px;
        margin-left: 100px;
    }

    .backButtonContainer {
        width: 100%;
        height: 40px;
    }


    @media (max-width: 800px) {
        .leaves {
            width: 55vw;
            height: 57vw;
            opacity: 40%;
            z-index: 0;
            left: -5%;
        }   

        .leaves2 {
            width: 40vw;
            height: 42vw;
            z-index: 0;
            opacity: 40%;
            right: 0%;
        }

        .backButton {
            position: absolute;
            top: 0;
            left: 0;
            margin-top: 30px;
            margin-left: 30px;
            font-size: 40px;
        }

        input {
            width: 250px;
        }

        .descriptionTextarea {
            width: 250px;
            height: 150px;
        }

        .contatoTitle {
            font-size: 35px;
        }
        
    }
`