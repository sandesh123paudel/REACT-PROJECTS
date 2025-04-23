import React, { Fragment } from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";

const Transactions = () => {
  const transactions = [
    {
      id: 1,
      icon: AiFillDollarCircle,
      text: "NPR Deposit",
      amount: "+ Rs.800000",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: 2,
      icon: SiBitcoinsv,
      text: "BTC Sell",
      amount: "+ Rs.800000",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: 3,
      icon: AiFillDollarCircle,
      text: "NPR Deposit",
      amount: "+ Rs.800000",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <CustomCard h={"full"}>
      <Text mb={"6"} fontSize={"sm"} color={"black.80"}>
        Recent Transactions
      </Text>
      <Stack>
        {transactions.map((transaction, a) => (
          <Fragment key={transaction.id}>
            {a != 0 && <Divider mt={2} />}

            <Flex gap={4} spacing="2">
              <Grid
                boxSize={"40px"}
                bg="black.5"
                borderRadius={"full"}
                placeItems={"center"}
              >
                <Icon as={transaction.icon}></Icon>
              </Grid>
              <Flex justify={"space-between"} w={"full"}>
                <Stack spacing={0}>
                  <Text textStyle={"h6"}>{transaction.text}</Text>
                  <Text fontSize={"sm"} color={"black.40"}>
                    {transaction.timestamp}
                  </Text>
                </Stack>
                <Text textStyle={"h6"}>{transaction.amount}</Text>
              </Flex>
            </Flex>
          </Fragment>
        ))}
      </Stack>
      <Button colorScheme="gray" mt={"6"} w={"full"}>
        View All
      </Button>
    </CustomCard>
  );
};

export default Transactions;
