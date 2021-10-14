import styled from "styled-components";
import colors from "../../themes/colors";

export const LimpezaModal = styled.div`
      @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: auto;
    height: 70vh;
    background-color: ${colors.mediumGreen};
    /* filter: opacity(70%); */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: absolute;
    z-index: 2;
    border-radius: 10px;
    margin-top: 9%;
    /* ::-webkit-scrollbar {
    width: 10px;
}
    ::-webkit-scrollbar-track { 
        border-radius: 10px;
}
 
    ::-webkit-scrollbar-thumb {
        background: lightgray; 
        border-radius: 0px 10px 10px 0px;
}
    ::-webkit-scrollbar-thumb:hover {
        background-color: floralwhite;
} */
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
        overflow-y: hidden;
    }
    .service {
        color: white;
    }
    @media (max-width: 1138px) {
        .titleModal {
        font-size: 30px;
    }
    }
    @media (max-width: 756px) {
        .titleModal {
        font-size: 25px;
    }
    }
    @media (max-width: 607px) {
        width: 100vw;
        height: 100vh;
        margin-top: 0%;
        border-radius: 0px;
/* 
    ::-webkit-scrollbar-thumb {
        border-radius: 0px;
    } */
    .headerModal {
        width: 100%;
    }
    .headerModalObjects {
        width: 90vw
    }
    .modalFooter {
        width: 100%;           
    }
    .serviceList {
        width: 90vw;
        height: 10vh; 
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color:  ${colors.lightGreen};
    }
    .footerContainer {
        width: 90vw;
    } 
} 
`;  