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

import { FaUserCircle } from "react-icons/fa";

const TopNav = () => {
  return (
    <Box boxShadow="xl">
      <HStack
        maxWidth="60rem"
        // height="16"
        justify="space-between"
        px="16px"
        py="16px"
        mx="auto"
      >
        <Heading fontSize="24px" fontWeight="medium">
          Dashboard
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} />
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </MenuButton>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
