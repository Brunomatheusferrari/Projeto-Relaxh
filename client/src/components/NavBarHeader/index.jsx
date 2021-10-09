import styled from "styled-components";
import colors from "../../themes/colors";

export const NavBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 2;
    width: 100vw;
    position: sticky;
    /* overflow-y: hidden; */
    align-items: center;
    height: 0px;
    margin: 0;
    top: 5%;

    &::before {
        position: absolute;
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