import styled from "styled-components";
import colors from "../../themes/colors";


export const LimpezaButton = styled.a`

.LimpezaButtonStyle {
    color: ${colors.lightWhite};
        padding: 10px 50px 10px 50px;
        border: 2px solid ${colors.lightWhite};
        text-decoration: none;
        box-shadow: inset 0 0 0 0 ${colors.lightWhite};
        transition: .5s ease-in-out;
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

        @media screen and (max-width: 768px){
            padding: 10px 20px 10px 20px;
}
}

    
`;