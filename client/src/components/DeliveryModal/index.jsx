import styled from "styled-components";
import colors from "../../themes/colors";

export const DeliveryModal = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    font-family: 'Barskervville';
    width: 70vw;
    height: 70vh;
    background-color: ${colors.mediumWhite};
    filter: opacity(70%);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
`;