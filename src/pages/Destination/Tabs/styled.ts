import styled, { css } from "styled-components";
interface ActiveProps {
  active: boolean;
}

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
  display: flex;
  gap: 20px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const NavItem = styled.li<ActiveProps>`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  transition: border 0.3s ease-in;

  &:hover {
    ${({ active }) =>
      !active &&
      css`
        border-bottom: 2px solid ${({ theme }) => theme.colors.medium};
      `}
  }

  ${({ active }) =>
    active &&
    css`
      border-bottom: 2px solid ${({ theme }) => theme.colors.third};
      color: ${({ theme }) => theme.colors.third};
    `}
`;
