import styled from "styled-components";
import colors from "../../themes/colors";


export const LimpezaServicoList = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: 65vw;
    height: 10vh;
    background-color: ${colors.lightGreen};
    /* filter: opacity(70%); */
    display: flex;
    justify-content: center;
    align-items: center;    
    z-index: 2;
    margin: 20px 0px;

    .button {
        padding: 10px;
    }

    .number {
        font-size: 45px;
        margin: 0px 20px;
    }

    .foodList {
        color: white;
        width: 60vw;
        height: 15vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .counter {
        width: 20vw;
        display: flex;
        justify-content: flex-end;
    }

    .name {
        width: 20vw;
        font-size: 25px;        
    }

`;

