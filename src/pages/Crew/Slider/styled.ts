import styled, { css } from "styled-components";

interface ActiveProps {
  active: boolean;
}

export const StyledSlider = styled.div`
  /* padding-bottom: 80px; */
  padding-top: 80px;
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    margin-top: 40px;
    margin-bottom: 40px;
    justify-content: center;
  }
`;

export const SliderPoint = styled.div<ActiveProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.transparentMedium};
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.medium};
  }

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.colors.light};
    `}
`;
