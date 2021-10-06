import styled from "styled-components";
import colors from "../../themes/colors";


export const LimpezaServicoList = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: auto;
    height: 10vh;
    background-color: ${colors.mediumWhite};
    /* filter: opacity(70%); */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    z-index: 2;
    margin-top: 9%;
    overflow-y: auto;
    border-radius: 10px;

    .headerModal {
        color: white;
        width: 70vw;
        height: 10vh;
        background-color: ${colors.lightGreen};
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0px;
        left: 0px;
       
    }
    .name {
        width: 20vw;
        font-size: 25px;        
    }

`;

