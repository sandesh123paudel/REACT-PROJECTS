import { Container, Flex, Heading, Menu } from "@chakra-ui/react";
import React from "react";

const TopNav = () => {
  return (
    <Flex boxShadow="xl">
      <Container>
        <Heading>Dashboard</Heading>
        <Menu></Menu>
      </Container>
    </Flex>
  );
};

export default TopNav;
