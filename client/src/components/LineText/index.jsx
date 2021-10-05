import styled from "styled-components";
import colors from "../../themes/colors";

export function LineText(props) {

   const LineTextContainer = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
        display: flex;
        align-items: center;
        position: absolute;
        top: -10%;
    `;

    const LineofText = styled.div`
    width: 169px;


    border: 0.5px solid ${colors.lightGreen};
    `;

    const Text = styled.p`
        font-family: 'Cormorant', serif;
        color: ${colors.lightGreen};
        font-style: normal;
        font-weight: 800;
        font-size: 20px;
        line-height: 22px;
        margin-right: 8px;
    `;

    

    return(
        <LineTextContainer>
            <Text>{props.title}</Text><LineofText />
        </LineTextContainer>
    );
}