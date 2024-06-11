import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../constants/theme";
import Button from "./Button";

const buttonClick = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.8); }
  100% { transform: scale(1); }
`;

const getVariantColor = (variant) => {
  switch (variant) {
    case "semi":
      return `${colors.semiTransparent}`;
    case "none":
      return "none";
    default:
      return `${colors.mainBgColor}`;
  }
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  max-width: 40rem;
  gap: 1rem;
  background-color: ${({ variant }) => getVariantColor(variant)};
  color: ${(props) => colors.mainFontColor};
  font-family: ${(props) => colors.mainFontFamily};
  font-weight: ${(props) => colors.mainFontWeight};
  font-size: ${(props) => colors.mainFontSize};
  margin-top: 5rem;
  border-radius: 20px;
`;

const CardTop = styled.div`
  color: ${(props) => colors.mainFontColor};
  font-size: 2rem;
`;

const CardContent = styled.div`
  margin: 1rem;
  color: ${(props) => colors.mainFontColor};
  font-size: 1rem;
`;

const CardLinks = styled.div`
  color: ${(props) => colors.mainFontColor};
`;

function Card({
  variant = "default",
  title = "title",
  author = "author",
  text = "text",
}) {
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [readMoreClicked, setReadMoreClicked] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  return (
    <CardContainer variant={variant}>
      <CardTop>
        <h2 className="post__title_card">{title}</h2>
      </CardTop>
      <CardContent>
        <h2 className="post__author_card">{author}</h2>
        <p className="post__text_card">{text}</p>
      </CardContent>
      <CardLinks>
        <Button
          label="Like"
          variant="positive"
          isClicked={clickedButton === "positive"}
          onClick={() => handleButtonClick("positive")}
        />
        <Button
          label="Dislike"
          variant="negative"
          isClicked={clickedButton === "negative"}
          onClick={() => handleButtonClick("negative")}
        />
        <Button
          label="Read More"
          variant="info"
          isClicked={clickedButton === "info"}
          onClick={() => handleButtonClick("info")}
        />
      </CardLinks>
    </CardContainer>
  );
}

export default Card;
