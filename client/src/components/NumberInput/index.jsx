import styled from "styled-components";
import colors from "../../themes/colors";

export const NumberInput =  styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Montserrat', sans-serif;
    padding: 5px 20px 5px 20px;
    width: 210px;
    height: 40px;
    background: none;
    border: none;
    border-bottom: 1px solid ${colors.lightWhite};
    font-size: 15px;
    color: ${colors.lightWhite};
    outline: none;

    &::placeholder {
        color: #c2c1c1;
        font-family: 'Baskervville', serif;
    }

    @media (max-width: 700px) {
        width: 250px;
    }
`;

export default NumberInput;