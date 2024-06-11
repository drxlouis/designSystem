import React from "react";
import Card from "../components/Card";
import styled from "styled-components";
import { colors } from "../constants/theme";
import Documentation from "../components/Documentation";

const Container = styled.div`
  flex-direction: column;
  overflox-x: hidden;
  padding: 5rem;
  text-align: center;
  justify-content: center;
  background-color: ${(props) => colors.altBgColor};
  min-height: 100vh;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-family: ${(props) => colors.mainFontFamily};
  color: ${(props) => colors.altFontColor};
  font-size: ${(props) => colors.titleFontSize};
`;

const CardPage = () => {
  return (
    <Container>
      <Title>Cards</Title>
      <Documentation
        varianten="Drie kaarten: default, semi-transparent en transparent."
        text="Deze componenten zijn bedoeld om informatie weer te geven. Ze hebben plaats voor een titel, een onderwerp of auteur, een korte tekst. 
        Ook hebben ze drie acties: een like-button, een dislike-button en een derde button voor een eigen actie. De cards kunnen gebruikt worden om een post van een blog voor te tellen of men kan
        deze gebruiken om een product voor te stellen. De cards kunnen gebruikt worden bij een blog, een webshop, een portfolio, et cetera."
      />
      <CardContainer>
        <Card title="Default" author="Author" text="Content" />
        <Card
          variant="semi"
          title="Semi-transparent"
          author="Author"
          text="Content"
        />
        <Card
          variant="none"
          title="Transparent"
          author="Author"
          text="Content"
        />
      </CardContainer>
    </Container>
  );
};

export default CardPage;
