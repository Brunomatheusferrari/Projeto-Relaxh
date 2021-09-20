import styled from "styled-components";
import colors from "../../themes/colors";

export const NavBarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 2;
    width: 95vw;
    position: relative;
    overflow-y: hidden;
    align-items: center;
    height: 50px;
    margin-top: 30px;
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