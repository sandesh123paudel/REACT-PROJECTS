import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RxDashboard, RxDoubleArrowRight } from "react-icons/rx";

const SideBar = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      url: "/",
    },
    {
      icon: RxDoubleArrowRight,
      text: "Transactions",
      url: "/transactions",
    },
  ];

  return (
    <Stack boxShadow="sm">
      {navLinks.map((nav) => (
        <HStack key={nav.name}>
          <Icon as={nav.icon}></Icon>
          <Text as="h1">{nav.text}</Text>
        </HStack>
      ))}
    </Stack>
  );
};

export default SideBar;
