import React from "react";
import Basket from "../components/Basket";
import styled from "styled-components";
import { colors } from "../constants/theme";
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

const BasketPage = () => {
  return (
    <Container>
      <Title>Shopping Carts</Title>
      <Documentation
        varianten="Winkelmandje met volle, semi-transparante en transparante achtergrond."
        text="Deze componenten zijn bedoeld om een overzicht weer te geven van wat de klant wilt bestellen.
         De klant kan hierin nog artikelen verwijderen. Daarna kan hij op de knop pay duwen, waaruit hij naar de betaalpagina wordt geleid. Deze componenten kunnen gebruikt worden bij elke soort 
         site met een webshop, zoals een kledingwinkel, een boekenwinkel, een elektronicawinkel, et cetera."
      />

      <Basket />
      <Basket variant="semi" />
      <Basket variant="none" />
    </Container>
  );
};

export default BasketPage;
