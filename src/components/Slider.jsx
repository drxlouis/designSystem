import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colors } from "../constants/theme";

const SliderContainer = styled.div`
  margin: 5rem auto;
  width: 25%;
`;

const sliderThumbStyles = css`
  width: 25px;
  height: 25px;
  background: ${colors.altFontColor};
  cursor: pointer;
`;

const SliderInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: ${colors.altBgColor};
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  background-color: ${colors.mainBgColor};
  border-radius: 10px;

  &:hover {
    opacity: 0.8;
    box-shadow: 0 0 10px ${colors.altFontColor}, 0 0 20px ${colors.altFontColor},
      0 0 30px ${colors.altFontColor}, 0 0 40px ${colors.altFontColor};
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    ${sliderThumbStyles}
    border-radius: ${({ variant }) => (variant === "square" ? "0%" : "50%")};
  }

  &::-moz-range-thumb {
    ${sliderThumbStyles}
    border-radius: ${({ variant }) => (variant === "square" ? "0%" : "50%")};
  }
`;

const ValueDisplay = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-family: ${colors.mainFontFamily};
  font-size: 1.5rem;
  color: ${colors.altFontColor};
`;

const Slider = ({ min = 0, max = 100, step = 5, variant = "round" }) => {
  const [value, setValue] = useState(min);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderContainer>
      <SliderInput
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        variant={variant}
      />
      <ValueDisplay>{value}</ValueDisplay>
    </SliderContainer>
  );
};

export default Slider;
