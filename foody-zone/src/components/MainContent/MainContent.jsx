import React from "react";
import styled from "styled-components";

const MainContent = () => {
  return <MainContentContainer></MainContentContainer>;
};

export default MainContent;

const MainContentContainer = styled.div`
  background: url("/images/bg.png"); /* Ensure correct path */
  height: calc(100vh - 70px); /* Adjust based on header height */
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover; /* Ensure it covers the entire area */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
`;
