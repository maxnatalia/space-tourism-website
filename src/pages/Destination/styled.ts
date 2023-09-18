import styled from "styled-components";

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 156px;
  margin: 44px auto;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
    margin: 66px auto;
    padding: 0 90px;
    text-align: center;
  }

  @media (max-width: 767px) {
    grid-gap: 6px;
    padding: 0 30px;
  }
`;

export const Image = styled.img`
  width: 445px;
  height: 445px;
  align-self: flex-end;
  justify-self: flex-end;
  filter: drop-shadow(
    12px 2px 100px ${({ theme }) => theme.colors.transparentMedium}
  );

  @media (max-width: 1024px) {
    width: 300px;
    height: 300px;
    justify-self: center;
  }

  @media (max-width: 767px) {
    width: 170px;
    height: 170px;
  }
`;

export const ContentWrapper = styled.div`
  /* width: 100%; */
`;

export const InfoBox = styled.div`
  display: flex;
  gap: 80px;
  margin-top: 54px;
  padding-top: 30px;
  border-top: 1px solid ${({ theme }) => theme.colors.medium};

  @media (max-width: 1024px) {
    margin-top: 46px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    margin-top: 32px;
    flex-direction: column;
    gap: 36px;
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const InfoText = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2.36px;
  font-family: "Barlow Condensed", sans-serif;
`;

export const InfoData = styled.span`
  font-family: "Bellefair", serif;
  font-size: 28px;
  text-transform: uppercase;
`;
