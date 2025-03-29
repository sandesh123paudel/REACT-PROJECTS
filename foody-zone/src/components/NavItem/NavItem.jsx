import React from "react";
import styled from "styled-components";

const NavItem = ({ title }) => {
  return (
    <NavContainer>
      <p>{title}</p>
    </NavContainer>
  );
};

export default NavItem;

const NavContainer = styled.div`
  padding: 6px 12px;
  background-color: #ff4343;
  color: white;
  border-radius: 5px;
`;
