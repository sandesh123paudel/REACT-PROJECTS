import { Box, Heading, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const isActiveLink = (link) => {
    return location.pathname === link;
  };
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
    <Stack
      justifyContent="space-between"
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      w={{
        base: "full",
        lg: "16rem",
      }}
      bg="white"
      height="100vh"
    >
      <Box>
        <Link to={"/"}>
          <Heading
            as="h1"
            fontSize="20px"
            pt="56px"
            textAlign="center"
            color="#5F00D9"
          >
            @CRYPTO-DASH
          </Heading>
        </Link>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.url}>
              <HStack
                borderRadius="10px"
                key={nav.name}
                py="3"
                px="4"
                bg={isActiveLink(nav.url) ? "#f3f3f7" : "transparent"}
                color={isActiveLink(nav.url) ? "black" : "#797E82"}
                _hover={{
                  backgroundColor: "#f3f3f7",
                  color: "black",
                }}
              >
                <Icon as={nav.icon}></Icon>
                <Text fontSize="14px" fontWeight="medium">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to={"/support"}>
          <HStack
            borderRadius="10px"
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#f3f3f7" : "transparent"}
            color={isActiveLink("/support") ? "black" : "#797E82"}
            _hover={{
              backgroundColor: "#f3f3f7",
              color: "black",
            }}
          >
            <Icon as={BiSupport}></Icon>
            <Text fontSize="14px" fontWeight="medium">
              "Support"
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideBar;
