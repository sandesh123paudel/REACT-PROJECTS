import {
  Button,
  Card,
  Flex,
  Icon,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import { MdOutlineFileDownload } from "react-icons/md";
import TransactionTable from "./components/TransactionTable";

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 213,
    },
    {
      name: "Trade",
      count: 22,
    },
  ];
  return (
    <DashboardLayout title={"Transactions"}>
      <Flex justify={"end"} mt={6} mb={3}>
        <Button leftIcon={<MdOutlineFileDownload />}>Export CSV</Button>
      </Flex>
      <Card>
        <Tabs>
          <TabList pt={4} px={2}>
            {tabs.map((tab) => (
              <Tab key={tab} display={"flex"} gap={2}>
                {tab.name}{" "}
                <Tag colorScheme="gray" borderRadius={"full"}>
                  {tab.count}
                </Tag>{" "}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
