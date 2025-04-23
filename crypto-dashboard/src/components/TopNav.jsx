import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  HStack,
  Box,
  Icon,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";
import React from "react";

import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px={4} bg="white">
      <HStack
        maxWidth="70rem"
        height="16"
        justify="space-between"
        // px="32"
        // py="16px"
        mx="auto"
      >
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        ></Icon>
        <Heading fontSize="24px" fontWeight="medium">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} fontSize="32px" color="#5F00D9" />
          </MenuButton>

          <MenuList>
            <MenuItem>Logout</MenuItem>
            <Link to={"/support"}>
              <MenuItem>Support</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
