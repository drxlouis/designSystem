import React from "react";
import Form from "../components/LogIn";
import styled from "styled-components";
import { colors } from "../constants/theme";
import Register from "../components/Register";
import Newsletter from "../components/Newsletter";
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

const FormPage = () => {
  return (
    <Container>
      <Title>Forms</Title>
      <Documentation
        varianten="Drie verschillende varianten: Log in, register en nieuwsbrief."
        text="Deze componenten zijn bedoeld om de gebruiker te laten inloggen, registreren of zich in te schrijven voor een nieuwsbrief. 
        Het Login-component is belangrijk voor klanten die toegang willen krijgen tot beveiligde delen van een website zoals hun account, hun opgeslagen items of andere persoonlijke data. 
        Het Register-component is belangrijk voor nieuwe klanten die een account willen aanmaken. Het nieuwsbrief-component is belangrijk voor klanten die op de hoogte willen blijven van de laatste nieuwtjes.
        De componenten kunnen gebruikt worden bij elke soort site waar een persoonlijk account nodig is, zoals een webshop, een blog, een forum, et cetera.
        "
      />
      <Form />
      <Register />
      <Newsletter />
    </Container>
  );
};

export default FormPage;
