import React from "react";
import SideBar from "../../components/SideBar";
import TopNav from "../../components/TopNav";
import { Flex, Box } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div>How are you</div>
    </DashboardLayout>
  );
};

export default Dashboard;
