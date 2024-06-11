import React, { useState } from "react";
import Button from "../components/Button";
import styled from "styled-components";
import { colors } from "../constants/theme";
import Checkbox from "../components/CheckboxButton";
import Documentation from "../components/Documentation";

const Container = styled.div`
  overflow-x: hidden;
  padding: 5rem;
  text-align: center;
  background-color: ${colors.altBgColor};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: ${colors.mainFontFamily};
  color: ${colors.altFontColor};
  font-size: ${colors.titleFontSize};
`;

const CheckboxContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const ButtonPage = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const handleCheckboxChange = (index) => {
    const newItems = [...items];
    newItems[index].selected = !newItems[index].selected;
    setItems(newItems);
  };

  return (
    <Container>
      <Title>
        Buttons{" "}
        <Documentation
          varianten="Vier buttons: default, info, positive en negative. Drie checkboxes: bad, neutral en good."
          text="Deze componenten zijn bedoeld om de gebruiker te laten kiezen tussen verschillende opties. De buttons kunnen gebruikt worden om acties uit te voeren. 
        De checkboxes kunnen gebruikt worden om een keuze te maken tussen verschillende opties. De buttons kunnen gebruikt worden bij formulieren, instellingen, navigatie, login, acties bevestigen, et cetera."
        />{" "}
      </Title>

      <Button
        label="Default Button"
        variant="default"
        isClicked={clickedButton === "default"}
        onClick={() => handleButtonClick("default")}
      />
      <Button
        label="Info Button"
        variant="info"
        isClicked={clickedButton === "info"}
        onClick={() => handleButtonClick("info")}
      />
      <Button
        label="Positive Button"
        variant="positive"
        isClicked={clickedButton === "positive"}
        onClick={() => handleButtonClick("positive")}
      />
      <Button
        label="Negative Button"
        variant="negative"
        isClicked={clickedButton === "negative"}
        onClick={() => handleButtonClick("negative")}
      />
      <CheckboxContainer>
        <Checkbox variant="negative" label="bad" />
        <Checkbox variant="neutral" label="neutral" />
        <Checkbox variant="positive" label="good" />
      </CheckboxContainer>
    </Container>
  );
};

export default ButtonPage;
