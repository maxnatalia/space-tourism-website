import { useNavigate } from "react-router-dom";
import BackgroundPage from "../../common/BackgroundPage";
import SectionLayout from "../../common/SectionLayout";
import { HeadingOne, HeadingFive } from "../../common/Heading";
import { Paragraph } from "../../common/Paragraph";
import bgdesktop from "./background-home-desktop.jpg";
import bgmobile from "./background-home-mobile.jpg";
import bgtablet from "./background-home-tablet.jpg";
import { ExploreButton, Wrapper } from "./styled";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/destination");
  };

  return (
    <BackgroundPage
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
    >
      <SectionLayout
        extraButton={
          <ExploreButton onClick={handleNavigate}>EXPLORE</ExploreButton>
        }
      >
        <Wrapper>
          <HeadingFive>SO, YOU WANT TO TRAVEL TO</HeadingFive>
          <HeadingOne>space</HeadingOne>
          <Paragraph>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Paragraph>
        </Wrapper>
      </SectionLayout>
    </BackgroundPage>
  );
};

export default Home;
