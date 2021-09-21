import styled from "styled-components";
import colors from "../../themes/colors";

export const InputPrincipal =  styled.input`
    padding: 5px 20px 5px 20px;
    width: 280px;
    height: 40px;
    background: none;
    border: none;
    border-bottom: 2px solid ${colors.lightWhite};
    font-size: 15px;
    color: ${colors.lightWhite};
    margin-bottom: 40px;
    outline: none;
`;