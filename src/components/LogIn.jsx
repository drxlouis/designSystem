import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";
import Checkbox from "./CheckboxButton";
import Button from "./Button";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.mainBgColor};
  padding: 2rem;
  border-radius: 20px;
  width: 25rem;
  margin: 2rem auto;
  color: #ffffff;
  font-family: ${colors.mainFontFamily};
  font-size: ${colors.mainFontSize};
`;

const FormTitle = styled.h2`
  margin-bottom: 1rem;
  color: #2794a2;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid ${colors.altFontColor};
  border-radius: 10px;
  background-color: ${colors.altBgColor};
  color: ${colors.mainFontColor};
  font-family: ${colors.mainFontFamily};
`;

const ForgotPassword = styled.a`
  color: #2794a2;
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  background-color: #3f83f8;
  color: white;
  font-family: inherit;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #2794a2;
  }
`;

const FormSubTitle = styled.h3`
  font-weight: ${colors.mainFontWeight};
  font-size: ${colors.mainFontSize};
  color: ${colors.mainFontColor};
`;

const LogIn = () => {
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  return (
    <FormContainer>
      <FormTitle>Log In</FormTitle>
      <FormSubTitle>Log into your account</FormSubTitle>
      <InputField type="text" name="name" placeholder="Name" />
      <InputField type="email" name="email" placeholder="Email" />
      <InputField type="password" name="password" placeholder="password" />
      <Button
        label="Login"
        variant="positive"
        isClicked={clickedButton === "positive"}
        onClick={() => handleButtonClick("positive")}
      />
      <ForgotPassword href="#">Forgot password?</ForgotPassword>
    </FormContainer>
  );
};

export default LogIn;
