import styled from "styled-components";
import colors from "../../themes/colors";

export const ContatoContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.lightGreen};
    display: flex;
    justify-content: center;
    align-items: center;


    .contatoTitle {
        color : ${colors.lightWhite};
        font-family: 'Cormorant', serif;
        font-size: 50px;
        font-weight: bold;
    }

    .contatoAdjust {
        display: flex;
        flex-direction: column;
        align-items: center; 
    }

    .contatoInputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        
    }

    .inputsDois {
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
    }

`