import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../constants/theme";


const buttonClick = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const getVariantColor = (variant) => {
  switch (variant) {
    case "positive":
      return `${colors.positive}`;
    case "negative":
      return `${colors.negative}`;
    case "info":
      return `${colors.informative}`;
    default:
      return `${colors.altFontColor}`;
  }
};

const getInitialColor = () => `${colors.informative}`;


const StyledButton = styled.div`
  display: inline-block;
  margin: 2rem;
  text-align: center;
  border-radius: 20px;
  padding: 5px 20px; /* Add padding to the left and right to give some space around the text */
  line-height: 38px;
  background-color: ${({ variant, isClicked }) =>
    isClicked ? getVariantColor(variant) : getInitialColor()};
  color: ${(props) => colors.mainFontColor};
  font-family: ${(props) => colors.mainFontFamily};
  font-weight: ${(props) => colors.mainFontWeight};
  font-size: ${(props) => colors.altFontSize};
  transition: background-color 0.3s ease;

  &:hover {
    cursor: grab;
  }

  &:active {
    background-color: #2794a273;
  }

  &.clicked {
    animation: ${buttonClick} 0.3s forwards;
  }
`;

// Button component
function Button({ variant = "default", label = "Button", isClicked, onClick }) {
  return (
    <StyledButton
      className={isClicked ? "clicked" : ""}
      onClick={onClick}
      variant={variant}
      isClicked={isClicked}
    >
      {label}
    </StyledButton>
  );
}

export default Button;
