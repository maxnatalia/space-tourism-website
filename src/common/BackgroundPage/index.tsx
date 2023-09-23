import { Background } from "./styled";

interface BackgroundPageProps {
  children: React.ReactNode;
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
}
const BackgroundPage = ({
  bgdesktop,
  bgtablet,
  bgmobile,
  children,
}: BackgroundPageProps) => {
  return (
    <Background bgdesktop={bgdesktop} bgtablet={bgtablet} bgmobile={bgmobile}>
      {children}
    </Background>
  );
};

export default BackgroundPage;
