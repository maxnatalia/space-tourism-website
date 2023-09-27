import styled from "styled-components";
import { motion } from "framer-motion";

interface BackgroundProps {
  bgdesktop: string;
  bgtablet: string;
  bgmobile: string;
}

export const Background = motion(styled.div<BackgroundProps>`
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
`);
