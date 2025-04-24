import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { Card } from "@chakra-ui/react";
import SupportCard from "./components/SupportCard";

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>
     
        <SupportCard />
      
    </DashboardLayout>
  );
};

export default Support;
