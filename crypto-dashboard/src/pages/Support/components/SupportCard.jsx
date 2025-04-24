import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={"6"}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"386px"} mr={"auto"}>
        <Icon boxSize={"6"} color={"p.purple"} as={icon} />
        <Text fontWeight={"medium"} as={"h1"} textStyle={"h1"}>
          {title}
        </Text>
        <Text as={"p"} textStyle={"h6"} fontSize={"sm"} color={"black.60"}>
          {text}
        </Text>
      </Stack>
      <Box w={"full"} maxWidth={"550px"}>
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
