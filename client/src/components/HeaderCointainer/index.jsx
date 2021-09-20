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
    box-sizing: border-box;

    img {
        width: 500px;
        height: auto;
        margin-bottom: 30px;
        z-index: 1;
        overflow-y: hidden;
    }

    .subtitle {
        width: 150px;
        height: auto;
        margin-bottom: 80px;
        z-index: 1;
        overflow-y: hidden;
    }

    .iconArrowDown {
        color: ${colors.lightWhite};
        width: 40px;
        height: auto;
        z-index: 1;
        overflow-y: hidden;
        margin-bottom: 30px;

    }

    .videoBg {
        position: fixed; 
			right: 0; 
			bottom: 0;
			min-width: 100%; 
			min-height: 100%;
			width: auto; 
			height: auto; 
            z-index: -1000;
            filter: brightness(80%);
			background-size: cover; 
    }

    .titleContainer {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }


        
    
`;