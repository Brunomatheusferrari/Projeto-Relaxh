import styled from "styled-components";
import colors from "../../themes/colors";
export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: hidden;
    overflow-x: hidden;
    box-sizing: border-box;
    position: relative;

    img {
        width: 30%;
        height: auto;
        margin-bottom: 30px;
        z-index: 1;
        overflow-y: hidden;
    }

    .subtitle {
        width: 10%;
        height: auto;
        margin-bottom: 80px;
        z-index: 1;
        overflow-y: hidden;
    }

    .iconArrowDown {
        color: ${colors.lightWhite};
        width: 3%;
        height: auto;
        z-index: 1;
        overflow-y: hidden;
        margin-bottom: 30px;

    }

    .videoBg {
            position: absolute;
			min-width: 130%; 
			min-height: 130%;
			width: auto; 
			height: auto; 
            z-index: -1000;
            filter: brightness(60%);
			background-size: cover; 
    }

    .titleContainer {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


    @media (max-width: 1080px) {
        img {
            width: 40%;
            height: auto;
        }

        .subtitle {
            width: 14%;
            height: auto;
        }
    }

    @media (max-width: 750px) {
        img { 
            width: 55%;
            height: auto;
        }

        .subtitle {
            width: 17%;
            height: auto;
        }
    }

    @media (max-width: 410px) {
        img {
            width: 65%;
            height: auto;
        }

        .subtitle {
            width: 19%;
            height: auto;
        }
    }
        
    
`;