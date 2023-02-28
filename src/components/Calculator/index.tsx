import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  Divider,
} from "@chakra-ui/react";
import { TData } from "../Table";

type TCalculator = {
  selectedData: TData;
  isOpen: boolean;
  onClose: () => void;
};

type THandleClick = {
  type: "divider" | "multiply";
}

const Calculator = ({ selectedData, isOpen, onClose }: TCalculator) => {
  const [result, setResult] = useState(0);

  const handleClick = ({type}:THandleClick) =>{
    if(type === "divider"){
      setResult(selectedData.valueA / selectedData.valueB)
    }
    else if(type === "multiply"){
      setResult(selectedData.valueA * selectedData.valueB)
    }
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        closeOnEsc={true}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Calculadora</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="description">Descrição</FormLabel>
                <Input id="description" value={selectedData?.description} disabled/>
              </Box>
              <Box>
                <FormLabel htmlFor="valueA">Valor A</FormLabel>
                <Input id="valueA" value={selectedData?.valueA} disabled/>
              </Box>
              <Box>
                <FormLabel htmlFor="valueB">Valor B</FormLabel>
                <Input id="valueB" value={selectedData?.valueB} disabled/>
              </Box>
              <Box>
                <FormLabel htmlFor="result">Resultado</FormLabel>
                <Input id="result" value={result} disabled/>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={() => handleClick({type:"divider"})}>
              Dividir
            </Button>
            <Button colorScheme="blue" onClick={() => handleClick({type:"multiply"})}>Multiplicar</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Calculator };
