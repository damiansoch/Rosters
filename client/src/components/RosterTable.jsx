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
  Center,
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
            <Th>
              <Center>Names</Center>
            </Th>
            <Th>
              <Center>Band</Center>
            </Th>
            <Th>
              <Center>Sunday</Center>
            </Th>
            <Th>
              <Center>Monday</Center>
            </Th>
            <Th>
              <Center>Tuesday</Center>
            </Th>
            <Th>
              <Center>Wednesday</Center>
            </Th>
            <Th>
              <Center>Thursday</Center>
            </Th>
            <Th>
              <Center>Friday</Center>
            </Th>
            <Th>
              <Center>Saturday</Center>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {drivers.map((driver) => (
            <Tr>
              <Td>
                <Center>{driver.name}</Center>
              </Td>
              <Td>
                <Center>{driver.minHours}</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
              <Td>
                <Center>-</Center>
              </Td>
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
