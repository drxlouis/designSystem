import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "../constants/routes";
import { colors } from "../constants/theme";

const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${colors.mainBgColor};
  font-family: ${colors.mainFontFamily};
  font-size: ${colors.mainFontSize};
  padding: 4rem 1rem 1rem 1rem;
  width: 200px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  color: ${colors.altFontColor};
  font-size: 2rem;
  cursor: pointer;
  z-index: 1000;

  &:focus {
    outline: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) =>
    props.$active ? colors.altFontColor : colors.mainFontColor};
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  transition: color 0.3s;

  &:hover {
    color: ${colors.altFontColor};
  }
`;

function Navigation({ isOpen, toggleSidebar }) {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (index) => {
    setActiveLink(index);
    toggleSidebar(); // Close the sidebar when a link is clicked
  };

  return (
    <>
      <HamburgerButton onClick={toggleSidebar}>&#9776;</HamburgerButton>
      <Sidebar $isOpen={isOpen}>
        <StyledLink
          to={ROUTES.HOME}
          $active={activeLink === 0}
          onClick={() => handleClick(0)}
        >
          Home
        </StyledLink>
        <StyledLink
          to={ROUTES.BUTTONS}
          $active={activeLink === 1}
          onClick={() => handleClick(1)}
        >
          Buttons
        </StyledLink>
        <StyledLink
          to={ROUTES.CARDS}
          $active={activeLink === 2}
          onClick={() => handleClick(2)}
        >
          Cards
        </StyledLink>
        <StyledLink
          to={ROUTES.BASKETS}
          $active={activeLink === 3}
          onClick={() => handleClick(3)}
        >
          Shopping Carts
        </StyledLink>
        <StyledLink
          to={ROUTES.FORMS}
          $active={activeLink === 4}
          onClick={() => handleClick(4)}
        >
          Forms
        </StyledLink>
        <StyledLink
          to={ROUTES.SLIDERS}
          $active={activeLink === 5}
          onClick={() => handleClick(5)}
        >
          Sliders
        </StyledLink>
      </Sidebar>
    </>
  );
}

export default Navigation;
