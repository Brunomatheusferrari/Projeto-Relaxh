import styled from "styled-components";
import colors from "../../themes/colors";

export const DeliveryModal = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: auto;
    height: 70vh;
    background-color: ${colors.mediumWhite};
    /* filter: opacity(70%); */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    z-index: 2;
    overflow-y: auto;
    border-radius: 10px;
    margin-top: 9%;

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track { 
  border-radius: 10px;
}
 
::-webkit-scrollbar-thumb {
  background: lightgray; 
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: gray; 
}

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
        justify-content: space-between;
    }

     .total {
        font-size: 25px;
     }

    .ModalContent {
        flex: 1;
        align-self: center;
        color: gray;
    }

    .titleModal {
        font-size: 40px;
    }

    .sectionsTitle {
        padding-bottom: 15px;
        border-bottom: 1px solid lightgray;
    }
    
`;