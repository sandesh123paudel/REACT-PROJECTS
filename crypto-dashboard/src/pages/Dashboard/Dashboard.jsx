import React from "react";
import SideBar from "../../components/SideBar";
import TopNav from "../../components/TopNav";
import { Flex, Box } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <div>
      <Flex>
        <SideBar />
        <Box flexGrow={1}>
          <TopNav />
        </Box>
      </Flex>
    </div>
  );
};

export default Dashboard;
