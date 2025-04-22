import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import { Button, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { GoArrowUpRight } from "react-icons/go";
import {
  BiDownArrow,
  BiMinus,
  BiPlus,
  BiPlusCircle,
  BiSolidMinusCircle,
  BiSolidPlusCircle,
  BiUpArrow,
} from "react-icons/bi";
import { FaAd } from "react-icons/fa";

const PriceSection = () => {
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
    </CustomCard>
  );
};

export default PriceSection;
