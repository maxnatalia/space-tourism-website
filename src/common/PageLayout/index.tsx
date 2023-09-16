import { HeadingFive } from "../Heading";
import { Background, Num, Section } from "./styled";

interface PageLayoutProps {
  children: React.ReactNode;
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
  number?: string;
  title?: string;
}

const PageLayout = ({
  bgdesktop,
  bgtablet,
  bgmobile,
  number,
  title,
  children,
}: PageLayoutProps) => {
  return (
    <Background bgdesktop={bgdesktop} bgtablet={bgtablet} bgmobile={bgmobile}>
      <Section>
        {number && title && (
          <HeadingFive>
            <Num>{number} </Num>
            {title}
          </HeadingFive>
        )}
        {children}
      </Section>
    </Background>
  );
};

export default PageLayout;
