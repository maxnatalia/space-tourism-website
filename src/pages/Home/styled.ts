import styled from "styled-components";

export const GridBox = styled.div`
  padding: 120px 150px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    gap: 146px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding-top: 80px;
  }

  @media (max-width: 767px) {
    gap: 74px;
    padding: 20px 24px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContentBox = styled.div`
  width: 444px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  margin: 50px 0 70px 0;
  font-family: "Bellefair", serif;
  font-size: 150px;
  font-weight: 200;
  text-transform: uppercase;

  @media (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 60px;
  }

  @media (max-width: 767px) {
    font-size: 80px;
    text-align: center;
    margin-top: 16px;
    margin-bottom: 20px;
  }
`;

export const ExploreButton = styled.button`
  align-self: flex-end;
  width: 274px;
  height: 274px;
  background-color: ${({ theme }) => theme.colors.third};
  border: none;
  border-radius: 50%;
  letter-spacing: 2px;
  font-size: 32px;
  font-family: "Bellefair", serif;
  cursor: pointer;
  position: relative;

  @media (max-width: 1024px) {
    align-self: center;
    width: 242px;
    height: 242px;
  }

  @media (max-width: 767px) {
    align-self: center;
    font-size: 20px;
    width: 150px;
    height: 150px;
  }

  &::before {
    content: "";
    width: 450px;
    height: 450px;
    background-color: ${({ theme }) => theme.colors.dark};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0;
    transition: all 0.6s ease-in-out;
    z-index: -1;

    @media (max-width: 767px) {
      width: 246px;
      height: 246px;
    }
  }

  &:hover {
    &::before {
      opacity: 0.7;
    }
  }
`;
