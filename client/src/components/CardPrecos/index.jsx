import styled from "styled-components";
import colors from "../../themes/colors";

export const CardPrecos = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 350px;
    height: 350px;
    background-color: ${colors.mediumGreen};
    transition: .5s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .loginButtonStyle {
        display: none;
        margin: 40px 0 0 0;
    }

    &:hover {
        transform: scale(1.1);
        background-color: ${colors.lightGreen};
        
        .loginButtonStyle {
            display: block;
        }
    }

    .roomType {
        font-family: 'Cormorant', serif;
        color: ${colors.lightWhite};
        font-size: 35px;
        margin: 0;
    }

    .preco {
        color: ${colors.lightWhite};
        font-size: 45px;
        margin: 30px 0px 0px 0px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
    
    .subtitleText {
        font-family: 'Baskervville', serif;
        margin: 10px 0 0 0;
    }

    @media (max-width: 1240px) {
        width: 300px;
        height: 300px;
    }

   
`;