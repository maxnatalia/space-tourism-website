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
    <Background
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0, transition: { duration: 2 } }}
      bgdesktop={bgdesktop}
      bgtablet={bgtablet}
      bgmobile={bgmobile}
    >
      {children}
    </Background>
  );
};

export default BackgroundPage;
