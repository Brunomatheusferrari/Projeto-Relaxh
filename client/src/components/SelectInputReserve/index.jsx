import styled from "styled-components";
import colors from "../../themes/colors";

export const SelectInputReserve = styled.select`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    background: none;
    border: 1.5px solid ${colors.lightWhite};
    padding: 10px 30px 10px 30px;
    font-family: 'Baskervville', serif;
    color: ${colors.lightWhite};

    option {
        color: ${colors.lightGreen};
        font-size: 15px;
        background-color: white;
    }

    .numberSelect {
        font-family: 'Montserrat', sans-serif;
    }

    .number {
        font-family: 'Montserrat', sans-serif;
    }
`;