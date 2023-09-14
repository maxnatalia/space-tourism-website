import styled from "styled-components";

export const Section = styled.section`
  padding-top: 200px;
`;

export const Num = styled.span`
  color: ${({ theme }) => theme.colors.medium};
  font-weight: 900;
  padding-left: 170px;
`;

export const GridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 156px;
  width: 1038px;
  margin: 44px auto;
`;

export const Navigator = styled.div`
  display: flex;
`;

export const NavList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.li`
  padding: 20px 0;
  color: ${({ theme }) => theme.colors.secondary};
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  letter-spacing: 2.7px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 445px;
  height: 445px;
  align-self: flex-end;
`;

export const ContentWrapper = styled.div``;

export const Description = styled.p`
  margin: 0;
  line-height: 2.8;
  color: ${({ theme }) => theme.colors.secondary};
  padding-top: 10px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.medium};
`;
export const InfoBox = styled.div`
  display: flex;
  gap: 80px;
  padding-top: 30px;
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
