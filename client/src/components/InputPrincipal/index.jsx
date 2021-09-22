import styled from "styled-components";
import colors from "../../themes/colors";

export const InputPrincipal =  styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Baskervville', serif;
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

    &::placeholder {
        color: #c2c1c1;
        font-family: 'Baskervville', serif;
    }
`;