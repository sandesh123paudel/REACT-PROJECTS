import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
  Text,
  Icon,
  Flex,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HKKLLIOJ",
      date: "2025-02-01",
      time: "07:09 PM",
      type: { name: "NPR Deposit", transferBy: "E-Transfer" },
      amount: "810000",
      status: "Pending",
    },
    {
      id: "JHUIOPOK",
      date: "2025-02-02",
      time: "10:15 AM",
      type: { name: "USD Withdrawal", transferBy: "Bank Transfer" },
      amount: "120000",
      status: "Completed",
    },
    {
      id: "LKJHGFDW",
      date: "2025-02-03",
      time: "03:45 PM",
      type: { name: "EUR Deposit", transferBy: "Wire Transfer" },
      amount: "450000",
      status: "Pending",
    },
    {
      id: "QWERTYUI",
      date: "2025-02-04",
      time: "11:30 AM",
      type: { name: "GBP Withdrawal", transferBy: "E-Transfer" },
      amount: "300000",
      status: "Failed",
    },
    {
      id: "ZXCVBNML",
      date: "2025-02-05",
      time: "09:00 AM",
      type: { name: "AUD Deposit", transferBy: "Bank Transfer" },
      amount: "600000",
      status: "Completed",
    },
    {
      id: "ASDFGHJK",
      date: "2025-02-06",
      time: "02:20 PM",
      type: { name: "CAD Withdrawal", transferBy: "Wire Transfer" },
      amount: "250000",
      status: "Processing",
    },
    {
      id: "POIUYTRE",
      date: "2025-02-07",
      time: "05:10 PM",
      type: { name: "JPY Deposit", transferBy: "E-Transfer" },
      amount: "900000",
      status: "Completed",
    },
    {
      id: "MNBVCXZQ",
      date: "2025-02-08",
      time: "08:45 AM",
      type: { name: "CHF Withdrawal", transferBy: "Bank Transfer" },
      amount: "400000",
      status: "Failed",
    },
    {
      id: "PLKJHGFZ",
      date: "2025-02-09",
      time: "01:15 PM",
      type: { name: "NZD Deposit", transferBy: "Wire Transfer" },
      amount: "700000",
      status: "Pending",
    },
    {
      id: "OIUYTREW",
      date: "2025-02-10",
      time: "06:30 PM",
      type: { name: "SGD Withdrawal", transferBy: "E-Transfer" },
      amount: "500000",
      status: "Completed",
    },
    {
      id: "BTC001",
      date: "2025-02-11",
      time: "04:30 PM",
      type: { name: "BTC Deposit", transferBy: "Crypto Wallet" },
      amount: "1500000",
      status: "Completed",
    },
  ];

  const statusColor = {
    Pending: "gray",
    Completed: "green",
    Processing: "orange",
    Failed: "red",
  };

  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>
              <Flex gap={1} align={"center"}>
                <Text>Amount</Text>
                <Icon fontSize={"24px"} as={IoMdArrowDropdown} />
              </Flex>
            </Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color={"p.black"}>
          {tableData.map((data) => {
            const isDeposit = data.type.name.toLowerCase().includes("deposit");
            return (
              <Tr key={data.id}>
                <Td fontSize={"sm"} fontWeight={"medium"}>
                  {data.id}
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                      {data.date}
                    </Text>
                    <Text fontSize={"xs"} color={"black.40"}>
                      {data.time}
                    </Text>
                  </Stack>
                </Td>
                <Td>
                  <Stack spacing={0}>
                    <Text fontSize={"sm"} fontWeight={"medium"}>
                      {data.type.name}
                    </Text>
                    <Text fontSize={"xs"} color={"black.40"}>
                      {data.type.transferBy}
                    </Text>
                  </Stack>
                </Td>
                <Td
                  fontSize={"sm"}
                  fontWeight={"medium"}
                  color={isDeposit ? "green.500" : "red.500"}
                >
                  {isDeposit ? `+ Rs. ${data.amount}` : `- Rs. ${data.amount}`}
                </Td>
                <Td fontSize={"sm"} fontWeight={"medium"}>
                  <Tag
                    bg={statusColor[data.status]}
                    color={"white"}
                    borderRadius={"full"}
                  >
                    {data.status}
                  </Tag>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
