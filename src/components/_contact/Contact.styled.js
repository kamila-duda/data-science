import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  color: ${({ theme }) => theme.color.darknestWhite};
  background: linear-gradient(0.37deg, #1f1735 -30.5%, #1b508d 99.75%);
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 40px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 20px 20px;
  }
`;
