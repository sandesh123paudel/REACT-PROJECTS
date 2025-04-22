import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import SideBar from "./SideBar";
import TopNav from "./TopNav";

const DashboardLayout = ({ title }) => {
  return (
    <Flex>
      <SideBar />
      <Box flexGrow={1}>
        <TopNav title={title} />
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
