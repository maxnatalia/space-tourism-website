import styled, { css } from "styled-components";

interface BoxProps {
  reverseRow?: boolean;
  reverseCol?: boolean;
  mobileReverseCol?: boolean;
}

interface ContentProps {
  reverseNavCol?: boolean;
  reverseNavRow?: boolean;
  reverseMobileNavCol?: boolean;
}

interface ImageBoxProps {
  end?: boolean;
}

interface ImageProps {
  smaller?: boolean;
  mobileImageSize?: boolean;
}

export const Section = styled.section`
  padding-top: 200px;
  margin-bottom: 40px;

  @media (max-width: 1024px) {
    padding-top: 134px;
    padding-bottom: 80px;
  }

  @media (max-width: 767px) {
    padding-top: 90px;
    padding-bottom: 2px;
  }
`;

export const TitleWrapper = styled.div`
  padding-left: 168px;

  @media (max-width: 1024px) {
    padding-left: 50px;
  }

  @media (max-width: 767px) {
    padding-left: 0;
  }
`;

export const Num = styled.span`
  color: ${({ theme }) => theme.colors.medium};
  font-weight: 900;
`;

export const Box = styled.div<BoxProps>`
  padding-left: 168px;
  min-height: 700px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 58px auto;
    padding: 0 120px;
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 767px) {
    padding: 0 20px;
    min-height: 500px;
  }

  ${({ mobileReverseCol }) =>
    mobileReverseCol &&
    css`
      @media (max-width: 767px) {
        flex-direction: column-reverse;
      }
    `}

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
        width: 92%;
        flex-direction: column-reverse;
        gap: 0;
      }
    `}
`;

export const Content = styled.div<ContentProps>`
  display: flex;
  flex-direction: column;

  ${({ reverseMobileNavCol }) =>
    reverseMobileNavCol &&
    css`
      @media (max-width: 767px) {
        flex-direction: column-reverse;
      }
    `}

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
        align-items: center;
        gap: 40px;
      }
    `}
`;

export const Article = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Navigator = styled.div`
  @media (max-width: 1024px) {
    margin-top: 54px;
  }

  @media (max-width: 767px) {
    margin-top: 26px;
  }
`;

export const ImageBox = styled.div<ImageBoxProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ end }) =>
    end &&
    css`
      margin-left: 120px;
      justify-content: flex-end;

      @media (max-width: 1024px) {
        margin-left: 0;
        justify-content: center;
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

  ${({ mobileImageSize }) =>
    mobileImageSize &&
    css`
      @media (max-width: 767px) {
        object-fit: cover;
        width: 300px;
        height: auto;
        border-bottom: 1px solid ${({ theme }) => theme.colors.medium};
      }
    `}
`;
