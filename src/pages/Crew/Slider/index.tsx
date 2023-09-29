import { CrewMember } from "../../../core/useFetchData";
import { ActiveItemProps } from "../../../core/useActiveItem";
import { SliderPoint, StyledSlider } from "./styled";

interface SliderProps extends ActiveItemProps {
  crew: CrewMember[];
}

const pointVariants = {
  hidden: { opacity: 0, scale: 3, x: 200 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

const Slider = ({ crew, activeItem, handleChangeItem }: SliderProps) => {
  return (
    <StyledSlider
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.1 } },
      }}
    >
      {crew.map((member, index) => (
        <SliderPoint
          variants={pointVariants}
          transition={{ type: "spring" }}
          active={activeItem === index}
          key={member.name}
          onClick={() => handleChangeItem(index)}
        />
      ))}
    </StyledSlider>
  );
};

export default Slider;
