import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import { BiSolidMinusCircle, BiSolidPlusCircle } from "react-icons/bi";

const PriceSection = () => {
  const timestamps = ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];
  return (
    <CustomCard>
      <Flex justify={"space-between"} align={"start"}>
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
          </HStack>
          <HStack
            align={{
              base: "flex-start",
              xl: "center",
            }}
            flexDir={{
              base: "column",
              xl: "row",
            }}
          >
            <Text textStyle="h2" fontWeight={"medium"}>
              Rs. 400000.00
            </Text>
            <HStack fontWeight={"medium"} color={"green.500"}>
              <Icon as={GoArrowUpRight}></Icon>
              <Text fontSize={"sm"} fontWeight={"medium"}>
                20%
              </Text>
            </HStack>
          </HStack>
        </Stack>

        <HStack>
          <Button leftIcon={<Icon as={BiSolidPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={BiSolidMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded" colorScheme="green">
        <Flex justify={"end"}>
          <TabList bg={"black.5"} p={"3px"}>
            {["1H", "1D", "1W", "1M"].map((tab) => (
              <Tab
                _selected={{
                  bg: "white",
                }}
                fontSize={"sm"}
                p={"6px"}
                borderRadius={"4px"}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image w={"100%"} src="/Graph.png" mt="48px"></Image>
            <HStack justify={"space-between"} mt="4px">
              {timestamps.map((time) => (
                <Text key={time} fontSize={"sm"} color="black.80">
                  {time}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>Two</TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
