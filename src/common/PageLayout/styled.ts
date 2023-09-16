import styled from "styled-components";

interface BackgroundProps {
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
}

export const Background = styled.div<BackgroundProps>`
  background-image: url("${props => props.bgdesktop}");
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 2;
  position: relative;

  @media (max-width: 1024px) {
    background-image: url("${props => props.bgtablet}");
  }

  @media (max-width: 767px) {
    background-image: url("${props => props.bgmobile}");
  }
`;

export const Section = styled.section`
  padding-top: 200px;

  @media (max-width: 1024px) {
    padding-top: 134px;
  }

  @media (max-width: 767px) {
    padding-top: 90px;
  }
`;

export const Num = styled.span`
  color: ${({ theme }) => theme.colors.medium};
  font-weight: 900;
  padding-left: 170px;

  @media (max-width: 1024px) {
    padding-left: 50px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;
