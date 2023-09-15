import styled from "styled-components";

export const Paragraph = styled.p`
  margin: 0;
  line-height: 2.2;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 444px;

  @media (max-width: 1024px) {
    max-width: 100%;
    line-height: 1.8;
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;
