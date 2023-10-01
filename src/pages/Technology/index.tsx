import { useFetchData } from "../../core/useFetchData";
import { useActiveItem } from "../../core/useActiveItem";
import BackgroundPage from "../../common/BackgroundPage";
import SectionLayout from "../../common/SectionLayout";
import { HeadingThree } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import bgdesktop from "./background-technology-desktop.jpg";
import bgtablet from "./background-technology-tablet.jpg";
import bgmobile from "./background-technology-mobile.jpg";
import useIsLandscape from "./useIsLandscape";
import SliderNum from "./SliderNum";
import { Span } from "./styled";

const Technology = () => {
  const { isLandscape } = useIsLandscape();
  const { activeItem, handleChangeItem } = useActiveItem();
  const { technology } = useFetchData();
  const activeTechnology = technology[activeItem];

  return (
    <BackgroundPage
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
    >
      <SectionLayout
        key={activeItem}
        number={"03"}
        title={"Space Launch 101"}
        src={
          isLandscape
            ? activeTechnology?.images?.landscape
            : activeTechnology?.images?.portrait
        }
        alt={activeTechnology?.name}
        navigator={
          <SliderNum
            technology={technology}
            activeItem={activeItem}
            handleChangeItem={handleChangeItem}
          />
        }
        reverseCol
        reverseNavRow
        end
      >
        <Span>The terminology...</Span>
        <HeadingThree>{activeTechnology?.name}</HeadingThree>
        <Paragraph>{activeTechnology?.description}</Paragraph>
      </SectionLayout>
    </BackgroundPage>
  );
};

export default Technology;
