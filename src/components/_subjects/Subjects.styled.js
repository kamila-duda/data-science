import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 10px 20px;
  background: ${({ theme }) => theme.color.primaryColor};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 10px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 10px 20px;
  }
`;

export const TitleContainer = styled.header`
  width: 100%;
  padding: 0px 90px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 0px 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 0px 10px;
  }
`;

export const TilesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  align-items: center;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
`;

export const TileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  :before {
    content: "";
    position: absolute;
    border: 1px dashed ${({ theme }) => theme.color.darknestWhite};
    width: 108%;
    height: 102%;
    left: -4%;
    top: -1%;
    z-index: -1;
    @media (max-width: ${({ theme }) => theme.breakpoint.canvas}) {
      border: unset;
    }
  }
`;

export const TileTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
`;

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 170px;
  flex-grow: 1;
  @media (max-width: ${({ theme }) => theme.breakpoint.canvas}) {
    width: 250px;
  }
`;

export const Image = styled.img`
  margin: 80px 10px 0 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.breakpoint.canvas}) {
    display: none;
  }
`;
