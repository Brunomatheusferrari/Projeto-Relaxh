import styled from "styled-components";
import colors from "../../themes/colors";


export const LoginContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .loginTitle {
        color : ${colors.lightWhite};
        margin-bottom: 30px;
        font-family: 'Cormorant', serif;
        font-size: 50px;
    }
    

    .contentContainer {
        display: flex ;
        flex-direction: column;
        flex: 1;
        
        align-items: center;
        justify-content: center;

    }
    
    .contentAdjust {
        display: flex;
        flex-direction: column;
        width: 450px;
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

    strong {
        border-bottom: 2px dotted ${colors.lightWhite};
        margin-left: 5px;

        &:hover {
            cursor: pointer;
        }
    }
`;