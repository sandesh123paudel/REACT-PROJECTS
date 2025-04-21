import { Container, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const TopNav = () => {
  return (
    <Flex boxShadow="xl">
      <Container>
        <Heading>Dashboard</Heading>
      </Container>
    </Flex>
  );
};

export default TopNav;
