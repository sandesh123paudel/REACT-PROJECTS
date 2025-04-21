import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";

const SideBar = () => {
  const navLinks = [
    {
      icon: MdDashboard,
      text: "Dashboard",
      url: "/",
    },
    {
      icon: FaMoneyCheckAlt,
      text: "Transactions",
      url: "/transactions",
    },
  ];

  return (
    <Stack boxShadow="sm" maxWidth="256px" height="100vh">
      <Heading
        as="h1"
        fontSize="20px"
        pt="56px"
        textAlign="center"
        color="#5F00D9"
      >
        @CRYPTO-DASH
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack
            key={nav.name}
            py="3"
            px="4"
            _hover={{
              backgroundColor: "#f3f3f7",
              color: "black",
              fontWeight: "bold",
            }}
            color="#797E82"
          >
            <Icon as={nav.icon}></Icon>
            <Text fontSize="14px" fontWeight="medium">
              {nav.text}
            </Text>
          </HStack>
        ))}
      </Box>
    </Stack>
  );
};

export default SideBar;
