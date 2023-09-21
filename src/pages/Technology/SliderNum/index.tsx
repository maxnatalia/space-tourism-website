import { ActiveItemProps } from "../../useActiveItem";
import { TechnologyItem } from "../../../core/useFetchData";
import { NumPoint, StyledSliderNum } from "./styled";

interface SliderNumProps extends ActiveItemProps {
  technology: TechnologyItem[];
}

const SliderNum = ({
  technology,
  activeItem,
  handleChangeItem,
}: SliderNumProps) => {
  return (
    <StyledSliderNum>
      {technology.map((_, index) => (
        <NumPoint
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
