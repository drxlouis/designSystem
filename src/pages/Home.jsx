import React from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";
import Button from "../components/Button";

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

const SubTitle = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 20rem;
  font-family: ${(props) => colors.mainFontFamily};
  color: ${(props) => colors.altFontColor};
  font-size: ${(props) => colors.mainFontSize};
`;

const Home = () => {
  return (
    <Container>
      <Title>React design systeem dashboard</Title>
      <SubTitle target="blank" href="https://github.com/drxlouis/designsystem">
        GitHub Repo
      </SubTitle>
    </Container>
  );
};

export default Home;
