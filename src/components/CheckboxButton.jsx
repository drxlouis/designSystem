import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";

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

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 1rem 0;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) =>
    props.checked ? getVariantColor(props.variant) : colors.mainBgColor};
  border-radius: 3px;
  transition: all 150ms;
  border: 2px solid ${colors.altFontColor};

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => getVariantColor(props.variant)};
  }

  &:hover {
    cursor: pointer;
  }
`;

const CheckboxLabel = styled.label`
  margin-left: 0.5rem;
  font-family: ${colors.mainFontFamily};
  font-size: ${colors.mainFontSize};
  color: ${colors.mainFontColor};
`;

const Checkbox = ({ label, variant = "default" }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <CheckboxContainer onClick={handleCheckboxChange}>
      <HiddenCheckbox checked={checked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={checked} variant={variant} />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
