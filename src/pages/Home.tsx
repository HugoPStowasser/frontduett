import { useState } from "react";
import { Calculator } from "../components/Calculator";
import { Table, TData } from "../components/Table";
import { ContainerHome } from "../styles/HomeStyle";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<TData>({} as TData);

  const onOpen = (data: TData) => {
    setIsOpen(true);
    setSelectedData(data);
  };

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <ContainerHome>
      <Table onOpen={onOpen}/>
      <Calculator selectedData={selectedData} isOpen={isOpen} onClose={onClose}/>
    </ContainerHome>
  );
};

export { Home };
