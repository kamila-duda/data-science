import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 40px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 20px 20px;
  }
`;

export const TileGrid = styled.div`
  display: grid;
  grid-gap: 38px;
  grid-template-columns: repeat(3, 1fr);
  margin: 60px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Tile = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  padding: 110px 30px 30px;
  border-radius: 25px;
  box-shadow: 6px 6px 50px 0px #c9bbc4;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 50px 30px 30px;
  }
`;

export const Decor = styled.img`
  position: absolute;
  top: -15px;
  right: 45px;
  width: 12%;
`;

export const Line = styled.img`
  padding: 20px 0;
  width: 100%;
`;
