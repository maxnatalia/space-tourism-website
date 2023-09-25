import { useFetchData } from "../../core/useFetchData";
import { useActiveItem } from "../../core/useActiveItem";
import BackgroundPage from "../../common/BackgroundPage";
import SectionLayout from "../../common/SectionLayout";
import { HeadingTwo } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import bgdesktop from "./background-destination-desktop.jpg";
import bgtablet from "./background-destination-tablet.jpg";
import bgmobile from "./background-destination-mobile.jpg";
import Tabs from "./Tabs";
import { InfoBox, InfoColumn, InfoData, InfoText } from "./styled";

const Destination = () => {
  const { activeItem, handleChangeItem } = useActiveItem();
  const { destinations } = useFetchData();
  const activeDestination = destinations[activeItem];

  return (
    <BackgroundPage
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
    >
      <SectionLayout
        number={"01"}
        title={"Pick your destination"}
        src={activeDestination?.images.png}
        alt={activeDestination?.name}
        smaller
        navigator={
          <Tabs
            destinations={destinations}
            activeItem={activeItem}
            handleChangeItem={handleChangeItem}
          />
        }
        reverseRow
        reverseCol
        reverseNavCol
      >
        <HeadingTwo>{activeDestination?.name}</HeadingTwo>
        <Paragraph>{activeDestination?.description}</Paragraph>
        <InfoBox>
          <InfoColumn>
            <InfoText>avg. distance</InfoText>
            <InfoData>{activeDestination?.distance}</InfoData>
          </InfoColumn>
          <InfoColumn>
            <InfoText>est. travel time</InfoText>
            <InfoData>{activeDestination?.travel}</InfoData>
          </InfoColumn>
        </InfoBox>
      </SectionLayout>
    </BackgroundPage>
  );
};

export default Destination;
