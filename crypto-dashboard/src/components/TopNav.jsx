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

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px={4}>
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
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
