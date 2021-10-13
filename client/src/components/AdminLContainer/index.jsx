import styled from "styled-components";
import colors from "../../themes/colors";
import leaves2 from "../../static/img/leaves2.png"

export const AdminLContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.darkGreen};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-y: hidden;
    filter: drop-shadow(0px 0px 17px rgba(0, 0, 0, 0.25));

    .title {
        font-family: 'Cormorant', serif;
        font-weight: 300;
        font-size: 40px;
        position: relative;
        top: -2%;
        margin-bottom: 10px;
    }

    .leaves1 {
        width: 15vw;
        height: 20vw;
        background-image: url(${leaves2});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        bottom: 0;
        left: 0%;
    }
    
    .leaves2 {
        width: 10vw;
        height: 15vw;
        background-image: url(${leaves2});
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        right: 3%;
        transform: rotate(180deg);
    }

    @media(max-width: 1100px) {
        .title {
            font-size: 30px;
        }
    }

    @media(max-width: 600px) {
        .title {
            font-size: 25px;
        }

        .leaves1 {
            width: 10vw;
            height: 15vw;
        }
    }
`;

