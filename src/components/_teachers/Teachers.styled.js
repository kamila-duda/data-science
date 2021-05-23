import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: linear-gradient(
    0deg,
    rgba(31, 23, 53, 1) 10%,
    rgba(55, 67, 121, 1) 33%,
    rgba(55, 67, 121, 1) 66%,
    rgba(31, 23, 53, 1) 90%
  );
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    padding: 160px 40px 20px;
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
  grid-gap: 5px;
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
  padding: 30px 0;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 30px;
    align-items: center;
  }
`;

export const Image = styled.img`
  margin-bottom: 20px;
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 25px;
  box-shadow: 0px 0px 30px 1px #1f1735;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 250px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;
