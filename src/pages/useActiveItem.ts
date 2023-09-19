import { useState } from "react";

export interface ActiveItemProps {
  activeItem: number;
  handleChangeItem: (index: number) => void;
}

const useActiveItem = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleChangeItem = (index: number) => {
    setActiveItem(index);
  };
  return { activeItem, handleChangeItem };
};

export default useActiveItem;
