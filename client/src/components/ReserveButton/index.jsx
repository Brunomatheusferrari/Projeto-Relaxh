import styled from "styled-components";
import colors from "../../themes/colors";

export const ReserveButton = styled.a`
  .reserveButton {
  color: ${colors.lightWhite};
  padding: 10px 30px 10px 30px;
  border: 2px solid ${colors.lightWhite};
  text-decoration: none;
  box-shadow: inset 0 0 0 0 ${colors.lightWhite};
  transition: 0.5s ease-in-out;
  z-index: 2;
  overflow-y: hidden;

      &:hover {
          box-shadow: inset 300px 0 0 0 ${colors.lightWhite};
          color: ${colors.darkGreen};
          cursor: pointer;
      }
  } 

  @media (max-width: 500px) {
    font-size: 15px;
  }
`;