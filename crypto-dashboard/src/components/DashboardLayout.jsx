import { Box, Container, Flex } from "@chakra-ui/react";
import React, { Children } from "react";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

const DashboardLayout = ({ title, children }) => {
  return (
    <Flex>
      <SideBar />
      <Box flexGrow={1}>
        <TopNav title={title} />
        <Container maxW="70rem" bg="red">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
