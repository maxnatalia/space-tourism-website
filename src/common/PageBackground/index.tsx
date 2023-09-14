import React from "react";
import { Background } from "./styled";

interface PageBackgroundProps {
  children: React.ReactNode;
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
}

const PageBackground = ({
  children,
  bgdesktop,
  bgtablet,
  bgmobile,
}: PageBackgroundProps) => {
  return (
    <Background bgdesktop={bgdesktop} bgtablet={bgtablet} bgmobile={bgmobile}>
      {children}
    </Background>
  );
};

export default PageBackground;
