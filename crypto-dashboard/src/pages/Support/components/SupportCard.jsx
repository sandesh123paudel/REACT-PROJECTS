import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";

const SupportCard = () => {
  return (
    <Flex
      gap={"6"}
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW={"380px"}>
        <Icon boxSize={"6"} color={"p.purple"} as={IoMdMail} />
        <Text fontWeight={"medium"} as={"h1"} textStyle={"h1"}>
          Contact Us
        </Text>
        <Text as={"p"} textStyle={"h6"} fontSize={"sm"} color={"black.60"}>
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p={"6"} borderRadius={"16px"} flexGrow={1}>
        <Text fontWeight={"medium"} fontSize={"md"}>
          You will receive response within 24 hours of time of submit.
        </Text>

        <Stack spacing={"6"}>
          <HStack
            mt={"8"}
            display={"flex"}
            flexDir={{
              base: "column",
              md: "row",
            }}
          >
            <FormControl colorScheme="gray">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="James" />
            </FormControl>
            <FormControl>
              <FormLabel>Surname</FormLabel>
              <Input type="text" placeholder="Arthur" />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="name@gmail.com" />
            </FormControl>
          </HStack>
          <HStack>
            <FormControl>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
          </HStack>

          <Checkbox defaultChecked>
            <Text fontSize={"xs"} fontWeight={"medium"}>
              I agree with
              <Box as="span" color="p.purple" ml={1}>
                Terms & Conditions.
              </Box>
            </Text>
          </Checkbox>

          <Stack>
            <Button fontSize={"sm"}>Send a Message</Button>
            <Button fontSize={"sm"} colorScheme="gray">
              Book a Meeting
            </Button>
          </Stack>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
