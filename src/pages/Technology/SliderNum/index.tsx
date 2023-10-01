import { ActiveItemProps } from "../../../core/useActiveItem";
import { TechnologyItem } from "../../../core/useFetchData";
import { NumPoint, StyledSliderNum } from "./styled";

interface SliderNumProps extends ActiveItemProps {
  technology: TechnologyItem[];
}

const numVariants = {
  hidden: { opacity: 0, scale: 3, x: -200 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 2, delay: 1 },
  },
};

const SliderNum = ({
  technology,
  activeItem,
  handleChangeItem,
}: SliderNumProps) => {
  return (
    <StyledSliderNum
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3 },
        },
      }}
    >
      {technology.map((_, index) => (
        <NumPoint
          variants={numVariants}
          onClick={() => handleChangeItem(index)}
          key={index}
          active={activeItem === index}
        >
          {index + 1}
        </NumPoint>
      ))}
    </StyledSliderNum>
  );
};

export default SliderNum;
