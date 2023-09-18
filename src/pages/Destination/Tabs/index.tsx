import { DestinationPlanet } from "../../../core/useFetchData";
import { NavItem, NavList, Navigator } from "./styled";

interface NavigatorProps {
  activePlanet: number;
  setActivePlanet: (index: number) => void;
  destinations: DestinationPlanet[];
}

const Tabs = ({
  activePlanet,
  setActivePlanet,
  destinations,
}: NavigatorProps) => {
  const handleChangePlanet = (index: number) => {
    setActivePlanet(index);
  };

  return (
    <Navigator>
      <NavList>
        {destinations.map((planet: DestinationPlanet, index) => (
          <NavItem
            active={activePlanet === index}
            key={index}
            onClick={() => handleChangePlanet(index)}
          >
            {planet.name}
          </NavItem>
        ))}
      </NavList>
    </Navigator>
  );
};

export default Tabs;
