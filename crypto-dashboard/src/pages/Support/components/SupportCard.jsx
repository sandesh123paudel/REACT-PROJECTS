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
    <Flex>
      <Stack>
        <Icon boxSize={"6"} color={"p.purple"} as={IoMdMail} />
        <Text fontWeight={"medium"} as={"h1"} textStyle={"h1"}>
          Contact Us
        </Text>
        <Text as={"p"} textStyle={"h6"} fontSize={"sm"} color={"black.60"}>
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card p={"6"} borderRadius={"16px"} mx={"auto"}>
        <Text fontWeight={"medium"} fontSize={"md"}>
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack mt={"8"}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input type="text" placeholder="James" />
          </FormControl>
          <FormControl>
            <FormLabel>Surname</FormLabel>
            <Input type="text" placeholder="Arthur" />
          </FormControl>
        </HStack>
        <HStack mt={"6"}>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="name@gmail.com" />
          </FormControl>
        </HStack>
        <HStack mt={"6"}>
          <FormControl>
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Your Message" />
          </FormControl>
        </HStack>

        <Checkbox defaultChecked mt={"8"}>
          I agree with
          <Box as="span" color="p.purple" ml={1}>
            Terms & Conditions.
          </Box>
        </Checkbox>

        <Stack mt={8}>
          <Button>Send a Message</Button>
          <Button colorScheme="gray">Book a Meeting</Button>
        </Stack>
      </Card>
    </Flex>
  );
};

export default SupportCard;
