import styled from "styled-components";
import colors from "../../themes/colors";

export const AdminDContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
        font-family: 'Cormorant', serif;
        font-weight: 300;
        font-size: 40px;
    }
`;

