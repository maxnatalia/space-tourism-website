import { CrewMember } from "../../../core/useFetchData";
import { ActiveItemProps } from "../../useActiveItem";
import { SliderPoint, StyledSlider } from "./styled";

interface SliderProps extends ActiveItemProps {
  crew: CrewMember[];
}

const Slider = ({ crew, activeItem, handleChangeItem }: SliderProps) => {
  return (
    <StyledSlider>
      {crew.map((member, index) => (
        <SliderPoint
          active={activeItem === index}
          key={member.name}
          onClick={() => handleChangeItem(index)}
        />
      ))}
    </StyledSlider>
  );
};

export default Slider;
