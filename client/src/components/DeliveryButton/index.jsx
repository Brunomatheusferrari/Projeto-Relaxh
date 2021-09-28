import styled from "styled-components";
import colors from "../../themes/colors";

export const DeliveryButton = styled.a`
    .deliveryButtonStyle {
        justify-self: flex-end;
        color: ${colors.lightWhite};
        padding: 10px 40px 10px 40px;
        border: 2px solid ${colors.lightWhite};
        text-decoration: none;
        box-shadow: inset 0 0 0 0 ${colors.lightWhite};
        transition: .5s ease-in-out;
        z-index: 2;
        margin-right: 40px;
        overflow-y: hidden;
        position: relative;


        &:hover {
            box-shadow: inset 300px 0 0 0 ${colors.lightWhite};
            color: ${colors.darkGreen};
            cursor: pointer;

        }
    }
`;