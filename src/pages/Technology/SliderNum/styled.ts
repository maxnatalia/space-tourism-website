import styled, { css } from "styled-components";

interface ActiveProps {
  active: boolean;
}

export const StyledSliderNum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    flex-direction: row;
    padding-left: 0;
    gap: 16px;
  }
`;

export const NumPoint = styled.div<ActiveProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.transparentMedium};
  cursor: pointer;
  transition: border 0.3s ease-in;

  &:hover {
    ${({ active }) =>
      !active &&
      css`
        border: 1px solid ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.light};
      `}
  }

  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.colors.light};
    `}

  @media (max-width: 1024px) {
    width: 58px;
    height: 58px;
  }
`;
