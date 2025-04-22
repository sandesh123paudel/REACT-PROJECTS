import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";

const PortfolioSection = () => {
  return (
    <HStack
      bg="white"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      justify={"space-between"}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        alignItems={"start"}
        spacing={{
          base: 4,
          xl: 16,
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={FaInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight={"medium"}>
            Rs. 100,000,000.00
          </Text>
        </Stack>

        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Wallet Balance</Text>
          </HStack>
          <HStack spacing={4}>
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}>
                22.395546
              </Text>
              <Tag colorScheme="gray">BTC</Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight={"medium"}>
                22.395546
              </Text>
              <Tag colorScheme="gray">NPR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={BiDownArrow} />}>Deposit</Button>
        <Button leftIcon={<Icon as={BiUpArrow} />}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
