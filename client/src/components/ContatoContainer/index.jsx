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
    }

    .contatoTitle {
        width: 100%;
        text-align: center;
        font-family: 'Cormorant', serif;
        font-weight: bold;
        font-size: 40px;
        margin: 0 0 20px 0;
    }

    .buttonContainer {
        width: 100%;
        display: flex;
        justify-content: center;
    
    }

    .loginButtonStyle {
        margin: 0;
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
`