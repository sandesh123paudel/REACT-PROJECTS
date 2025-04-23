import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import PortfolioSection from "./components/PortfolioSection";
import PriceSection from "./components/PriceSection";
import Transactions from "./components/Transactions";
import InfoCard from "./components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={6}
      >
        {/* Full-width on all screen sizes */}
        <GridItem colSpan={{ base: 1, md: 2, xl: 4 }}>
          <PortfolioSection />
        </GridItem>

        {/* Split evenly on md+, stack on base */}
        <GridItem colSpan={{ base: 1, md: 1, xl: 2 }}>
          <PriceSection />
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1, xl: 2 }}>
          <Transactions />
        </GridItem>

        {/* InfoCards - 1 column on mobile, 2 on md+, 1 on xl */}
        <GridItem colSpan={{ base: 1, md: 1, xl: 2 }}>
          <InfoCard
            imgUrl={"/dot.svg"}
            tagText={"Loans"}
            text={
              "Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"
            }
            inverted={false}
          />
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 1, xl: 2 }}>
          <InfoCard
            imgUrl={"/grid_bg.svg"}
            tagText={"Contact"}
            text={
              "Learn more about our real estate, mortgage, and corporate account services"
            }
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLayout>
  );
};

export default Dashboard;
