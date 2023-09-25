import styled from "styled-components";

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
