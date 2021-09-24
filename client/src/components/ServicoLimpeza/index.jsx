
import styled from "styled-components";
import colors from "../../themes/colors";
import leaves8 from "../../static/img/leaves8.png"
import leaves9 from "../../static/img/leaves9.png"

export const ServicoLimpeza = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 100vw;
    height: 100vh;
    background-color: ${colors.lightGreen};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .leaves8 {
        width: 32vw;
        height: 30vw;
        background-image: url(${leaves8});
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        display: flex;
        align-self: flex-start;
        top: -5%;
        flex-direction: column;
        right: -4%;
    }

    .leaves9 {
        width: 32vw;
        height: 30vw;
        background-image: url(${leaves9});
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;
        display: flex;
        align-self: flex-start;
        top: -5%;
        flex-direction: column;
        right: -4%;
    }
    `