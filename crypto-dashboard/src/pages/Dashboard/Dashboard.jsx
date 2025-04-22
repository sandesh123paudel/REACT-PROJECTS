import React from "react";
import SideBar from "../../components/SideBar";
import TopNav from "../../components/TopNav";
import { Flex, Box } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <PortfolioSection />
    </DashboardLayout>
  );
};

export default Dashboard;
