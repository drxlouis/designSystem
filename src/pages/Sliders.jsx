import React from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";
import Slider from "../components/Slider";
import Documentation from "../components/Documentation";

const Container = styled.div`
  overflox-x: hidden;
  padding: 5rem;
  text-align: center;
  background-color: ${(props) => colors.altBgColor};
  min-height: 100vh;
`;

const Title = styled.h1`
  font-family: ${(props) => colors.mainFontFamily};
  color: ${(props) => colors.altFontColor};
  font-size: ${(props) => colors.titleFontSize};
`;

const SliderPage = () => {
  return (
    <Container>
      <Title>Sliders</Title>
      <Documentation
        varianten="Twee verschillende sliders: vierkant en rond."
        text="Deze componenten zijn bedoeld om de gebruiker een alternatief te geven voor een nummer in te typen in een input.
        Dit kan de gebruiker helpen om sneller aanpassingen te maken. De sliders kunnen gebruikt worden bij instellingen, zoals volume, helderheid, grootte, et cetera."
      />

      <Slider min={1} max={4} step={1} variant="square" />
      <Slider min={0} max={100} step={20} variant="round" />
    </Container>
  );
};

export default SliderPage;
