import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: ${({ theme }) => theme.color.primaryColor};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 40px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 20px 20px;
  }
`;

export const TilesWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    overflow-x: scroll;
    overflow-y: hidden;
  }
`;

export const TileWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  :before {
    content: "";
    position: absolute;
    border: 2px dashed ${({ theme }) => theme.color.darknestWhite};
    width: 116%;
    height: 108%;
    left: -8%;
    top: -4%;
    z-index: -1;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
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
  width: 30%;
`;

export const Image = styled.img`
  margin: 80px 10px 0 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }
`;
