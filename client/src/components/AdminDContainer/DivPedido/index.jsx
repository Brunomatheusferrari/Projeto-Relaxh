import styled from "styled-components";

export const DivPedido = styled.div`
    width: 95%;
    min-height: 10%;
    background: #5E7C80;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 17px;
    margin-top: 2%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .serviceTitle {
        width: 35%;
    }

    .serviceCheckBox {
        position: relative;
        right: -1%;
    }

    .verticalLine {
        width: 1px;
        height: 50%;
        background-color: white;
        opacity: 50%;
    }

    .verticalLine2 {
        width: 1px;
        height: 50%;
        background-color: white;
        opacity: 50%;
    }

    
    .verticalLine3 {
        width: 1px;
        height: 50%;
        background-color: white;
        opacity: 50%;
    }

    @media(max-width: 1100px) {
        .serviceTitle {
            width: 42%;
            font-size: 13px;
            margin-left: 20px;
        }

        p {
            font-size: 13px;
        }

        .serviceRoomNumber {
            margin: 20px;
        }

        .serviceHorario {
            margin: 20px;
        }

        
    }

    @media(max-width: 600px) {
        .serviceTitle {
            width: 42%;
            font-size: 10px;
            margin-left: 20px;
        }

        p {
            font-size: 10px;
        }

        .serviceRoomNumber {
            margin: 20px;
        }

        .serviceHorario {
            margin: 20px;
        }

        
    }
`;