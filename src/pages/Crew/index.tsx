import { useFetchData } from "../../core/useFetchData";
import { useActiveItem } from "../../core/useActiveItem";
import BackgroundPage from "../../common/BackgroundPage";
import SectionLayout from "../../common/SectionLayout";
import { HeadingFour, HeadingThree } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import bgdesktop from "./background-crew-desktop.jpg";
import bgtablet from "./background-crew-tablet.jpg";
import bgmobile from "./background-crew-mobile.jpg";
import Slider from "./Slider";

const Crew = () => {
  const { activeItem, handleChangeItem } = useActiveItem();
  const { crew } = useFetchData();
  const activeMember = crew[activeItem];

  return (
    <BackgroundPage
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
    >
      <SectionLayout
        key={activeItem}
        number={"02"}
        title={"Meet your crew"}
        src={activeMember?.images?.png}
        alt={activeMember?.name}
        navigator={
          <Slider
            handleChangeItem={handleChangeItem}
            activeItem={activeItem}
            crew={crew}
          />
        }
        mobileReverseCol
        reverseMobileNavCol
        mobileImageSize
      >
        <HeadingFour>{activeMember?.role}</HeadingFour>
        <HeadingThree>{activeMember?.name}</HeadingThree>
        <Paragraph>{activeMember?.bio}</Paragraph>
      </SectionLayout>
    </BackgroundPage>
  );
};

export default Crew;
