import styled from "styled-components";
import colors from "../../../themes/colors";

export const AdminTable = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Cormorant:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
    width: 60%;
    height: 80%;
    background-color: ${colors.mediumGreen};
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    position: relative;

    &::-webkit-scrollbar {
        width: 15px;            
        position: absolute;
        }

    &::-webkit-scrollbar-track {
        background: none;        /* color of the tracking area */
        position: absolute;
    }

    &::-webkit-scrollbar-thumb {
        background-color:${colors.lightGreen};    /* color of the scroll thumb */
        border-radius: 20px; 
        border: 3px solid ${colors.mediumGreen};  /* creates padding around scroll thumb */
        position: absolute;
    }

    .adminTableHeader {
        width: 100%;
        height: 12%;
        background-color: ${colors.lightGreen};
        border-top-right-radius: 35px;
        border-top-left-radius: 35px;
        /* border-radius: 35px; */
        box-shadow: 0px 4px 45px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: relative;

        .headerText {
            font-family: 'Cormorant', serif;
            color: ${colors.lightWhite};
            font-size: large;

            &:nth-child(1) {
                width: 40%;
            }
        }
    }



`;