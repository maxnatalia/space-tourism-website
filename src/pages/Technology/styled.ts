import styled from "styled-components";

export const GridBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px auto;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 56px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 72px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TextWrapper = styled.div`
  @media (max-width: 1024px) {
    max-width: 458px;
    text-align: center;
    padding-bottom: 96px;
  }
`;

export const Image = styled.img``;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
`;
