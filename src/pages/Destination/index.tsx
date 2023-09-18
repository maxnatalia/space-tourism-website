import { useState } from "react";
import { useFetchData } from "../../core/useFetchData";
import PageLayout from "../../common/PageLayout";
import { HeadingTwo } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import bgdesktop from "./background-destination-desktop.jpg";
import bgtablet from "./background-destination-tablet.jpg";
import bgmobile from "./background-destination-mobile.jpg";
import Tabs from "./Tabs";
import {
  ContentWrapper,
  GridBox,
  Image,
  InfoBox,
  InfoColumn,
  InfoData,
  InfoText,
} from "./styled";

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState<number>(0);
  const { destinations } = useFetchData();

  const activeDestination = destinations[activePlanet];

  return (
    <PageLayout
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
      number={"01"}
      title={"Pick your destination"}
    >
      <GridBox>
        <Image
          src={activeDestination?.images.png}
          alt={activeDestination?.name}
        />
        <ContentWrapper>
          <Tabs
            destinations={destinations}
            activePlanet={activePlanet}
            setActivePlanet={setActivePlanet}
          />
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
        </ContentWrapper>
      </GridBox>
    </PageLayout>
  );
};

export default Destination;
