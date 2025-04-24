import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p={"6"} borderRadius={"16px"} flexGrow={1}>
      <Stack spacing={"6"}>
        <Text fontWeight={"medium"} fontSize={"md"}>
          You will receive response within 24 hours of time of submit.
        </Text>
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
              Terms & Conditions.*
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
  );
};

export default ContactCard;
