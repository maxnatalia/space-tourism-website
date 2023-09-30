import { DestinationPlanet } from "../../../core/useFetchData";
import { ActiveItemProps } from "../../../core/useActiveItem";
import { NavItem, NavList } from "./styled";

const tabsVariants = {
  hidden: { opacity: 0, scale: 3, y: 100 },
  visible: { opacity: 1, scale: 1, y: 0 },
};
interface TabsProps extends ActiveItemProps {
  destinations: DestinationPlanet[];
}

const Tabs = ({ activeItem, handleChangeItem, destinations }: TabsProps) => {
  return (
    <NavList
      variants={{
        hidden: { opacity: 0, y: -300 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
      }}
    >
      {destinations.map((planet: DestinationPlanet, index) => (
        <NavItem
          variants={tabsVariants}
          transition={{ type: "spring", delay: 1, duration: 2 }}
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
