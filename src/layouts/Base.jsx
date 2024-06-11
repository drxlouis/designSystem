import React, { useState } from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../constants/theme";

const MainContent = styled.main`
  margin-left: ${(props) =>
    props.$isOpen
      ? "200px"
      : "0px"}; /* Adjust based on the width of your sidebar */
  margin-top: -1rem;
  margin-right: -1rem;
  overflox-x: hidden;
  background-color: ${colors.mainBgColor};
  min-height: 100vh;
  width: 100%;
  transition: margin-left 0.3s ease-in-out;
`;

const Base = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navigation isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <MainContent $isOpen={isOpen}>
        <Outlet />
      </MainContent>
    </>
  );
};

export default Base;
