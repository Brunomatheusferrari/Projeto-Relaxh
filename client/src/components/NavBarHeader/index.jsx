import styled from "styled-components";
import colors from "../../themes/colors";



export const NavBarHeader = styled.div`
    position: relative;
    top: 0%;
    position: absolute;
    z-index: 10000;

     /* .active {
        height: 50px;
        background-color: ${colors.mediumGreen};
        box-shadow: -2px 5px 24px 4px rgba(0,0,0,0.39); 
     }  */

    .navbar {
    display: flex;
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
`;