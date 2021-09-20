import styled from "styled-components";
import colors from "../../themes/colors";

export const SubmitButton = styled.a`
    .loginButtonStyle {
        color: ${colors.lightWhite};
        padding: 15px 50px 15px 50px;
        border: 2px solid ${colors.lightWhite};
        text-decoration: none;
        box-shadow: inset 0 0 0 0 ${colors.lightWhite};
        transition: 1s ease-in-out;
        z-index: 2;
        margin-right: 40px;
        overflow-y: hidden;
        position: relative;
        font-size: 20px;

        &:hover {
            box-shadow: inset 300px 0 0 0 ${colors.lightWhite};
            color: ${colors.darkGreen};
            cursor: pointer;

        }

    }

    `;