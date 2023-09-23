import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 767px) {
    width: 100%;
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
    margin-top: 100px;
    align-self: center;
    width: 242px;
    height: 242px;
  }

  @media (max-width: 767px) {
    margin-top: 0;
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
