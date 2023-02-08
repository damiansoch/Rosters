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
} from "@chakra-ui/react";

import { drivers } from "../drivers";

const RosterTable = () => {
  return (
    <TableContainer>
      <Table
        mt={20}
        size="sm"
        variant="striped"
        border={1}
        colorScheme="teal"
        mx="auto"
        maxW="80%"
      >
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Names</Th>
            <Th>Band</Th>
            <Th>Sunday</Th>
            <Th>Monday</Th>
            <Th>Tuesday</Th>
            <Th>Wednesday</Th>
            <Th>Thursday</Th>
            <Th>Friday</Th>
            <Th>Saturday</Th>
          </Tr>
        </Thead>
        <Tbody>
          {drivers.map((driver) => (
            <Tr>
              <Td>{driver.name}</Td>
              <Td>{driver.minHours}</Td>
              <Td></Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
              <Td>-</Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default RosterTable;
