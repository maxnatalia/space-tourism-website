import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface ShowProps {
  show: boolean;
}

export const StyledNav = styled.nav<ShowProps>`
  min-width: 100%;
  padding-left: 50px;
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 10;

  @media (max-width: 1024px) {
    padding-top: 0;
  }

  @media (max-width: 767px) {
    padding-top: 20px;
    padding-left: 20px;
  }
`;

export const LinksList = styled.ul<ShowProps>`
  list-style: none;
  padding-left: 0;
  margin: 0;
  min-width: 830px;
  display: flex;
  justify-content: center;
  gap: 48px;
  background-color: ${({ theme }) => theme.colors.transparentDark};
  position: relative;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    min-width: 450px;
    justify-content: space-evenly;
    gap: 0;
  }

  @media (max-width: 767px) {
    display: ${({ show }) => (show ? "flex" : "none")};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 100px;
    min-width: 70%;
    position: ${({ show }) => (show ? "absolute" : "relative")};
    top: 0;
    right: 0;
    z-index: -1;
    padding-left: 30px;
    height: 100vh;
  }

  &::after {
    content: "";
    width: 473px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.medium};
    position: absolute;
    top: 50%;
    right: 96%;

    @media (max-width: 1379px) {
      display: none;
    }
  }
`;

export const LinkNum = styled.span`
  font-weight: 900;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;

  @media (max-width: 768px) {
    font-weight: 900;
    font-size: 16px;
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 2.7px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
`;

export const LinkName = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  font-family: "Barlow Condensed", sans-serif;
  letter-spacing: 2.7px;
  color: ${({ theme }) => theme.colors.third};
  padding: 40px 0;
  display: flex;
  gap: 14px;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  transition: all 0.6s ease-in;

  &:hover {
    border-bottom: 4px solid ${({ theme }) => theme.colors.medium};
  }

  &.active {
    border-bottom: 4px solid ${({ theme }) => theme.colors.third};
  }

  @media (max-width: 1024px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    padding: 16px 0;
    &.active {
      border-bottom: none;
    }
  }
`;

export const MobileView = styled.div`
  display: none;

  @media (max-width: 767px) {
    cursor: pointer;
    display: block;
    padding: 0 20px;
  }
`;
