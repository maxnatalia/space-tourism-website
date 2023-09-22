import styled from "styled-components";

const baseHeadingStyles = `
  font-family: "Bellefair", serif;
  text-transform: uppercase;
`;

export const HeadingOne = styled.h1`
  margin: 50px 0 70px 0;
  font-size: 150px;
  font-weight: 200;
  ${baseHeadingStyles}

  @media (max-width: 1024px) {
    margin: 20px 0 60px 0;
    font-size: 80px;
  }

  @media (max-width: 767px) {
    font-size: 80px;
    text-align: center;
    margin: 16px 0 20px 0;
  }
`;

export const HeadingTwo = styled.h2`
  margin: 50px 0 46px 0;
  font-size: 100px;
  font-weight: 100;
  ${baseHeadingStyles}

  @media (max-width: 1024px) {
    margin: 50px 0 36px 0;
    font-size: 80px;
  }

  @media (max-width: 767px) {
    margin: 30px 0 18px 0;
    font-size: 56px;
  }
`;

export const HeadingThree = styled.h3`
  margin-top: 32px;
  font-size: 56px;
  font-weight: 100;
  ${baseHeadingStyles}

  @media (max-width: 1024px) {
    margin: 20px 0 32px 0;
    font-size: 40px;
  }
`;

export const HeadingFour = styled.h4`
  margin: 0;
  font-size: 32px;
  font-weight: 100;
  font-family: "Bellefair", serif;
  color: ${({ theme }) => theme.colors.medium};
  text-transform: uppercase;

  @media (max-width: 1024px) {
    font-size: 24px;
  }
`;

export const HeadingFive = styled.h5`
  margin: 0;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  font-weight: 200;
  letter-spacing: 4.72px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
    text-align: center;
  }
`;
