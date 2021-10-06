import styled from "styled-components";
import colors from "../../themes/colors";

export const LimpezaModal = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: auto;
    height: 60vh;
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

    .closeIcon {
        font-size: 30px;
        cursor: pointer;
    }

    .headerModalObjects {
        width: 60vw;
        height: 10vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .modalFooter {
        color: white;
        width: 70vw;
        height: 10vh;
        background-color: ${colors.lightGreen};        
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0px;
        left: 0px;            
    }

    .footerContainer {
        width: 60vw;
        height: 10vh; 
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .ModalContent {
        flex: 1;
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        
    }

    .titleModal {
        font-size: 40px;
    }

    .sectionsTitle {
        padding-bottom: 15px;
        border-bottom: 1px solid lightgray;
    }

    .serviceList {
        width: 50vw;
        height: 10vh; 
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color:  ${colors.lightGreen};
    }

    .service {
        color: white;
    }
     @media screen and (max-width: 600px) {

        width: 100vw;
        height: 100vh;
        margin-top: 0%;
    
    .headerModal {
        width: 100%;       
    }

    .headerModalObjects {
        width: 90vw;
    }

    .modalFooter {
        width: 100%;          
    }

    .footerContainer {
        width: 90vw;
    }
     }

`;  