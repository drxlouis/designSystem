import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
import { colors } from "../constants/theme";

const horizontalShaking = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(5px); }
  50% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

const payAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const BasketContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  color: ${colors.altBgColor};
  font-family: ${colors.mainFontFamily};
  font-weight: ${colors.mainFontWeight};
  font-size: ${colors.mainFontSize};
  margin-top: 5rem;
`;

const BasketBox = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const variantBackground = (variant) => {
  switch (variant) {
    case "semi":
      return `${colors.semiTransparent}`;
    case "none":
      return "none";
    default:
      return `${colors.mainBgColor}`;
  }
};

const BasketContent = styled.div`
  width: 40vw;
  min-width: 32rem;
  padding: 1rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  border: solid ${colors.altFontColor} 1px;
  border-radius: 20px;
  background-color: ${({ variant }) => variantBackground(variant)};
`;

const BasketTop = styled.div`
  color: white;
  font-size: 2rem;
`;

const BasketItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
  color: white;
  font-size: 1rem;
  gap: 2rem;

  &.editing .close {
    color: white;
  }

  &.editing .close:hover {
    transform: scale(1.2);
  }

  &.editing .title,
  &.editing .price {
    animation: ${horizontalShaking} 0.5s infinite;
  }
`;

const CloseButton = styled.p`
  color: ${colors.altBgColor};
  margin-right: 1rem;
`;

const BasketLinks = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

function Basket({ variant = "default" }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setClickedButton(buttonId);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
    setIsPaid(false);
    handleButtonClick("edit");
  };

  const handlePayClick = () => {
    // setIsPaid(true);  ---> Optioneel, opent de betaalpagina
    handleButtonClick("pay");
  };

  return (
    <>
      {!isPaid && (
        <BasketContainer>
          <BasketBox>
            <BasketContent variant={variant}>
              <BasketTop>
                <h2>Shopping Cart</h2>
                <h2>Total: $??.??</h2>
              </BasketTop>
              <div>
                <BasketItem className={isEditing ? "editing" : ""}>
                  <CloseButton
                    className={isEditing ? "editing close" : "close"}
                  >
                    X
                  </CloseButton>
                  <h2 className="title">Article 1</h2>
                  <h2 className="price">$??.??</h2>
                </BasketItem>
                <BasketItem className={isEditing ? "editing" : ""}>
                  <CloseButton
                    className={isEditing ? "editing close" : "close"}
                  >
                    X
                  </CloseButton>
                  <h2 className="title">Article 2</h2>
                  <h2 className="price">$??.??</h2>
                </BasketItem>
                <BasketItem className={isEditing ? "editing" : ""}>
                  <CloseButton
                    className={isEditing ? "editing close" : "close"}
                  >
                    X
                  </CloseButton>
                  <h2 className="title">Article 3</h2>
                  <h2 className="price">$??.??</h2>
                </BasketItem>
              </div>
              <BasketLinks className={isPaid ? "paid" : ""}>
                <Button
                  label="Edit"
                  variant="negative"
                  isClicked={clickedButton === "edit"}
                  onClick={handleEditClick}
                />
                <Button
                  label="Pay"
                  variant="positive"
                  isClicked={clickedButton === "pay"}
                  onClick={handlePayClick}
                />
              </BasketLinks>
            </BasketContent>
          </BasketBox>
        </BasketContainer>
      )}
    </>
  );
}

export default Basket;
