import { DestinationPlanet } from "../../../core/useFetchData";
import { ActiveItemProps } from "../../../core/useActiveItem";
import { NavItem, NavList } from "./styled";
interface TabsProps extends ActiveItemProps {
  destinations: DestinationPlanet[];
}

const Tabs = ({ activeItem, handleChangeItem, destinations }: TabsProps) => {
  return (
    <NavList>
      {destinations.map((planet: DestinationPlanet, index) => (
        <NavItem
          active={activeItem === index}
          key={index}
          onClick={() => handleChangeItem(index)}
        >
          {planet.name}
        </NavItem>
      ))}
    </NavList>
  );
};

export default Tabs;
