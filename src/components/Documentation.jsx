// src/components/Documentation.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";

const Varianten = styled.h2`
  font-family: ${colors.mainFontFamily};
  color: ${colors.mainFontColor};
  font-size: 1.2rem;
  font-weight: ${colors.mainFontWeight};
`;

const Y = styled.span`
  font-family: ${colors.mainFontFamily};
  color: ${colors.altFontColor};
  font-size: 1.3rem;
  font-weight: 600;
`;

const Text = styled.p`
  font-family: ${colors.mainFontFamily};
  color: ${colors.mainFontColor};
  font-size: 1rem;
`;

const Button = styled.button`
  font-family: ${colors.mainFontFamily};
  background-color: ${colors.altFontColor};
  color: ${colors.mainFontColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: ${colors.mainFontColor};
    color: ${colors.altFontColor};
  }
`;

const Modal = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.mainBgColor};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Overlay = styled.div`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const CloseButton = styled.button`
  font-family: ${colors.mainFontFamily};
  background-color: ${colors.altFontColor};
  color: ${colors.mainFontColor};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  position: absolute;
  top: 1rem;
  right: 1rem;

  &:hover {
    background-color: ${colors.mainFontColor};
    color: ${colors.altFontColor};
  }
`;

function Documentation({
  title = "Documentation",
  varianten = "Varianten",
  text = "Text",
}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleButtonClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseClick = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button onClick={handleButtonClick}>Toon documentation</Button>
      <Overlay isVisible={isModalVisible} onClick={handleCloseClick} />
      <Modal isVisible={isModalVisible}>
        <CloseButton onClick={handleCloseClick}>X</CloseButton>
        <Varianten>
          <Y>Varianten: </Y>
          <br />
          {varianten}
        </Varianten>
        <Text>{text}</Text>
      </Modal>
    </>
  );
}

export default Documentation;
