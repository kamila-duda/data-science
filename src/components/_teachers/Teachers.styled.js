import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: linear-gradient(179.22deg, #1f1735 10.27%, #1a64ac 127.55%);
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    padding: 60px 40px 20px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 40px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 20px 20px;
  }
`;

export const PicturesGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  margin: 60px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const PictureWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.darknestWhite};
  padding: 130px 30px 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 90px 30px 30px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 30px;
  }
`;

export const Image = styled.img`
  margin-bottom: 20px;
  width: 100%;
  object-fit: contain;
  border-radius: 25px;
  box-shadow: 0px 0px 30px 1px #1f1735;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 80%;
  }
`;
