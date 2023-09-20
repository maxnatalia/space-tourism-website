import styled, { css } from "styled-components";

interface BackgroundProps {
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
}
interface ReverseProps {
  reverseRow?: boolean;
  reverseCol?: boolean;
}

interface ReverseNavProps {
  reverseNavCol?: boolean;
  reverseNavRow?: boolean;
}

interface EndProps {
  end?: boolean;
}

interface ImageProps {
  smaller?: boolean;
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
  margin-bottom: 40px;

  /* @media (max-width: 1024px) {
    padding-top: 134px;
  }

  @media (max-width: 767px) {
    padding-top: 90px;
  } */
`;

export const TitleWrapper = styled.div`
  padding-left: 168px;

  @media (max-width: 1024px) {
    padding-left: 50px;
  }
`;

export const Article = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageBox = styled.div<EndProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ end }) =>
    end &&
    css`
      justify-content: flex-end;

      @media (max-width: 1024px) {
        justify-content: center;
      }
    `}
`;
export const Navigator = styled.div``;
export const Num = styled.span`
  color: ${({ theme }) => theme.colors.medium};
  font-weight: 900;
`;

export const Box = styled.div<ReverseProps>`
  padding-left: 168px;
  min-height: 700px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 58px auto;
    padding: 0 120px;
    flex-direction: column;
    /* gap: 140px; */
    text-align: center;
  }

  ${({ reverseRow }) =>
    reverseRow &&
    css`
      padding-right: 160px;
      flex-direction: row-reverse;
      gap: 126px;
    `}

  ${({ reverseCol }) =>
    reverseCol &&
    css`
      @media (max-width: 1024px) {
        padding: 0 0;
        flex-direction: column-reverse;
        gap: 0;
      }
    `}
`;

export const Content = styled.div<ReverseNavProps>`
  display: flex;
  flex-direction: column;

  ${({ reverseNavCol }) =>
    reverseNavCol &&
    css`
      flex-direction: column-reverse;
    `}

  ${({ reverseNavRow }) =>
    reverseNavRow &&
    css`
      flex-direction: row-reverse;
      align-items: flex-start;
      gap: 72px;

      @media (max-width: 1024px) {
        flex-direction: column-reverse;
      }
    `}
`;

export const Image = styled.img<ImageProps>`
  filter: drop-shadow(
    12px 2px 100px ${({ theme }) => theme.colors.transparentMedium}
  );

  ${({ smaller }) =>
    smaller &&
    css`
      height: 445px;
      width: 445px;

      @media (max-width: 1024px) {
        height: 300px;
        width: 300px;
      }
    `}
`;
