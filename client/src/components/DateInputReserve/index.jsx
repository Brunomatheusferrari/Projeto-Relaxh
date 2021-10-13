import styled from "styled-components";
import colors from "../../themes/colors";

export const DateInputReserve = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    background: none;
    border: 1.5px solid ${colors.lightWhite};
    padding: 10px 30px 10px 30px;
    color: ${colors.lightWhite};
    font-family: 'Montserrat', sans-serif;

    &::-webkit-calendar-picker-indicator {
        cursor: pointer;
        filter: invert(100%);
    }
`;