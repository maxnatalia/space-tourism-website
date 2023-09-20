import { useFetchData } from "../../core/useFetchData";
import PageLayout from "../../common/PageLayout";
import { HeadingFour, HeadingThree } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import useActiveItem from "../useActiveItem";
import bgdesktop from "./background-crew-desktop.jpg";
import bgtablet from "./background-crew-tablet.jpg";
import bgmobile from "./background-crew-mobile.jpg";
import Slider from "./Slider";

const Crew = () => {
  const { activeItem, handleChangeItem } = useActiveItem();
  const { crew } = useFetchData();
  const activeMember = crew[activeItem];

  return (
    <PageLayout
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
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
    >
      <HeadingFour>{activeMember?.role}</HeadingFour>
      <HeadingThree>{activeMember?.name}</HeadingThree>
      <Paragraph>{activeMember?.bio}</Paragraph>

      {/* <GridBox>
        <ContentWrapper>
          <HeadingFour>{activeMember?.role}</HeadingFour>
          <HeadingThree>{activeMember?.name}</HeadingThree>
          <Paragraph>{activeMember?.bio}</Paragraph>
          <Slider
            handleChangeItem={handleChangeItem}
            activeItem={activeItem}
            crew={crew}
          />
        </ContentWrapper>
        <Image src={activeMember?.images?.png} alt={activeMember?.name} />
      </GridBox> */}
    </PageLayout>
  );
};

export default Crew;
