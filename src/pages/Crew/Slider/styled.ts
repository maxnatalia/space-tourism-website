import styled, { css } from "styled-components";
import { motion } from "framer-motion";

interface ActiveProps {
  active: boolean;
}

export const StyledSlider = motion(styled.div`
  padding-top: 80px;
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    padding-top: 0;
    margin-bottom: 40px;
    justify-content: center;
  }
`);

export const SliderPoint = motion(styled.div<ActiveProps>`
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
`);
