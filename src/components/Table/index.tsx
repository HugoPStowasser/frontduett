import {
  Table as TableChakraUI,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export type TData = {
  id: number;
  description: string;
  valueA: number;
  valueB: number;
};

type TTable = {
  onOpen: (T:TData) => void;
}

const Table = ({onOpen}:TTable) => {
  const [data, setData] = useState<TData[]>([]);

  const getData = () => {
    //todo fetch axios
    setData([
      {
        id: 1,
        description: "Banana",
        valueA: 10,
        valueB: 2,
      },
      {
        id: 2,
        description: "Maçã",
        valueA: 0,
        valueB: 5,
      },
    ]);
  };

  useEffect(getData, []);

  return (
    <TableChakraUI size="lg">
      <Thead>
        <Tr>
          <Th>Descrição</Th>
          <Th>A</Th>
          <Th>B</Th>
          <Th>Ação</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((item) => (
          <Tr key={item.id}>
            <Td>{item.description}</Td>
            <Td isNumeric>{item.valueA}</Td>
            <Td isNumeric>{item.valueB}</Td>
            <Td>
              <Button onClick={() => onOpen(item)}>Selecionar</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </TableChakraUI>
  );
};

export { Table };
