import {
  Table as TableChakraUI,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import cors from "cors";
import { useEffect, useState } from "react";

export type TData = {
  id: number;
  description: string;
  valueA: number;
  valueB: number;
};

type TTable = {
  onOpen: (T: TData) => void;
};

const Table = ({ onOpen }: TTable) => {
  const [data, setData] = useState<TData[]>([]);

  const getData = () => {
    axios
      .get("https://localhost:7242/Fruit")
      .then(function (response: any) {
        setData(response.data);
      })
      .catch(function (error: any) {
        // manipula erros da requisição
        console.error(error);
      })
      .finally(function () {
        // sempre será executado
      });
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
