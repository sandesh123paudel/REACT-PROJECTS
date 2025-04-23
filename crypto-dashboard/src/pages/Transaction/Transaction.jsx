import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
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
import { BiPhoneIncoming, BiSearch } from "react-icons/bi";

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
      <Card borderRadius={"16px"}>
        <Tabs>
          <TabList pt={4} display={"flex"} justifyContent={"space-between"}>
            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab} display={"flex"} gap={2} pb={4}>
                  {tab.name}{" "}
                  <Tag colorScheme="gray" borderRadius={"full"}>
                    {tab.count}
                  </Tag>{" "}
                </Tab>
              ))}
            </HStack>

            <InputGroup colorScheme="gray" maxW={"250px"} pr={4}>
              <InputLeftElement pointerEvents="none">
                <BiSearch color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Search by ID or destination" />
            </InputGroup>
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
