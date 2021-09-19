import styled from "styled-components";
import colors from "../../themes/colors";

export const NavBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 2;
    width: 95vw;
    position: relative;
    top: -30%;
    overflow-y: hidden;

    .menuIcon {
        color:${colors.lightWhite};
        width: 40px;
        height: auto;
        margin-left: 40px;
        overflow-y: hidden;

        &:hover {
            cursor: pointer;
            overflow-y: hidden;
        }
    }
`;