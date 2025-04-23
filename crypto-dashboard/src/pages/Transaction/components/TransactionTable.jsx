import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const TransactionTable = () => {
  const tableData = [
    {
      id: "HKKLLIOJ",
      date: "2025-02-01",
      time: "07:09 PM",
      type: {
        name: "NPR Deposit",
        transferBy: "E-Transfer",
      },
      amount: "810000",
      status: "Pending",
    },
    {
      id: "JHUIOPOK",
      date: "2025-02-02",
      time: "10:15 AM",
      type: {
        name: "USD Withdrawal",
        transferBy: "Bank Transfer",
      },
      amount: "120000",
      status: "Completed",
    },
    {
      id: "LKJHGFDW",
      date: "2025-02-03",
      time: "03:45 PM",
      type: {
        name: "EUR Deposit",
        transferBy: "Wire Transfer",
      },
      amount: "450000",
      status: "Pending",
    },
    {
      id: "QWERTYUI",
      date: "2025-02-04",
      time: "11:30 AM",
      type: {
        name: "GBP Withdrawal",
        transferBy: "E-Transfer",
      },
      amount: "300000",
      status: "Failed",
    },
    {
      id: "ZXCVBNML",
      date: "2025-02-05",
      time: "09:00 AM",
      type: {
        name: "AUD Deposit",
        transferBy: "Bank Transfer",
      },
      amount: "600000",
      status: "Completed",
    },
    {
      id: "ASDFGHJK",
      date: "2025-02-06",
      time: "02:20 PM",
      type: {
        name: "CAD Withdrawal",
        transferBy: "Wire Transfer",
      },
      amount: "250000",
      status: "Pending",
    },
    {
      id: "POIUYTRE",
      date: "2025-02-07",
      time: "05:10 PM",
      type: {
        name: "JPY Deposit",
        transferBy: "E-Transfer",
      },
      amount: "900000",
      status: "Completed",
    },
    {
      id: "MNBVCXZQ",
      date: "2025-02-08",
      time: "08:45 AM",
      type: {
        name: "CHF Withdrawal",
        transferBy: "Bank Transfer",
      },
      amount: "400000",
      status: "Failed",
    },
    {
      id: "PLKJHGFZ",
      date: "2025-02-09",
      time: "01:15 PM",
      type: {
        name: "NZD Deposit",
        transferBy: "Wire Transfer",
      },
      amount: "700000",
      status: "Pending",
    },
    {
      id: "OIUYTREW",
      date: "2025-02-10",
      time: "06:30 PM",
      type: {
        name: "SGD Withdrawal",
        transferBy: "E-Transfer",
      },
      amount: "500000",
      status: "Completed",
    },
  ];
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Date & Time</Th>
            <Th>Type</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody color={"p.black"}>
          {tableData.map((data) => (
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
                    {data.type?.transferBy}
                  </Text>
                </Stack>
              </Td>
              <Td fontSize={"sm"} fontWeight={"medium"}>
                Rs. {data.amount}
              </Td>
              <Td fontSize={"sm"} fontWeight={"medium"}>
                {data.status}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
