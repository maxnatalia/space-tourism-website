import { useNavigate } from "react-router-dom";
import PageLayout from "../../common/PageLayout";
import { HeadingFive } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import bgdesktop from "./background-home-desktop.jpg";
import bgmobile from "./background-home-mobile.jpg";
import bgtablet from "./background-home-tablet.jpg";
import { ExploreButton, GridBox, Heading, ContentBox } from "./styled";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/destination");
  };

  return (
    <PageLayout bgdesktop={bgdesktop} bgtablet={bgtablet} bgmobile={bgmobile}>
      <GridBox>
        <ContentBox>
          <HeadingFive>SO, YOU WANT TO TRAVEL TO</HeadingFive>
          <Heading>space</Heading>
          <Paragraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Paragraph>
        </ContentBox>
        <ExploreButton onClick={handleNavigate}>EXPLORE</ExploreButton>
      </GridBox>
    </PageLayout>
  );
};

export default Home;
