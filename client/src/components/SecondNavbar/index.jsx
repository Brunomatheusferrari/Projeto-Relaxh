import styled, { keyframes } from "styled-components";
import colors from "../../themes/colors";

const slideIn = keyframes`
    from {
        height: 0px;
    } to {
        height: 80px;
    }
`;


export const SecondNavbar = styled.div `
    position: relative;
    top: 0%;
    position: fixed;
    z-index: 10000;

     .active {
        height: 50px;
        background-color: ${colors.mediumGreen};
        box-shadow: -2px 5px 24px 4px rgba(0,0,0,0.39); 
     } 

     .navbarActive {
        display: flex;
        justify-content: space-between;
        z-index: 1000000000;
        width: 100%;
        position: fixed;
        /* overflow-y: hidden; */
        align-items: center;
        height: 80px;
        margin: 0;
        top: 0%;
        animation: ${slideIn} 1s cubic-bezier(0.075, 0.82, 0.165, 1);
     }

        .navbar {
        display: none;
        justify-content: space-between;
        z-index: 1000000000;
        width: 100vw;
        position: absolute;
        /* overflow-y: hidden; */
        align-items: center;
        height: 80px;
        margin: 0;
        top: 5%;

        &::before {
            position: absolute;
        }

        }


    .menuIcon {
        color:${colors.lightWhite};
        width: 40px;
        height: auto;
        margin-left: 40px;

        &:hover {
            cursor: pointer;
        }
    }

    .menuRelaxh {
        width: 6vw;
        height: auto;
        position: relative;
        right: -2%;
    }

    @media (max-width: 1150px) {
        .menuRelaxh {
            width: 9vw;
        }
    } 

    @media (max-width: 850px) {
        .menuRelaxh {
            display: none;
        }
    }
`;