import { HeadingFive } from "../Heading";
import {
  Article,
  Background,
  Box,
  Content,
  Image,
  ImageBox,
  Navigator,
  Num,
  Section,
  TitleWrapper,
} from "./styled";

interface PageLayoutProps {
  children: React.ReactNode;
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
  number?: string;
  title?: string;
  src?: string;
  alt?: string;
  navigator?: React.ReactNode;
  reverseRow?: boolean;
  reverseCol?: boolean;
  reverseNavCol?: boolean;
  reverseNavRow?: boolean;
  end?: boolean;
  extraButton?: React.ReactNode;
  smaller?: boolean;
}

const PageLayout = ({
  bgdesktop,
  bgtablet,
  bgmobile,
  number,
  title,
  children,
  src,
  alt,
  navigator,
  reverseRow,
  reverseCol,
  reverseNavCol,
  reverseNavRow,
  end,
  extraButton,
  smaller,
}: PageLayoutProps) => {
  return (
    <Background bgdesktop={bgdesktop} bgtablet={bgtablet} bgmobile={bgmobile}>
      <Section>
        {number && title && (
          <TitleWrapper>
            <HeadingFive>
              <Num>{number} </Num>
              {title}
            </HeadingFive>
          </TitleWrapper>
        )}
        <Box reverseRow={reverseRow} reverseCol={reverseCol}>
          <Content reverseNavCol={reverseNavCol} reverseNavRow={reverseNavRow}>
            <Article>{children}</Article>
            <Navigator>{navigator}</Navigator>
          </Content>
          <ImageBox end={end}>
            {src && alt ? (
              <Image src={src} alt={alt} smaller={smaller} />
            ) : (
              <>{extraButton}</>
            )}
          </ImageBox>
        </Box>
      </Section>
    </Background>
  );
};

export default PageLayout;
