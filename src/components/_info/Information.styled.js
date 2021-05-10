import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: ${({ theme }) => theme.color.primaryColor};
  letter-spacing: 0.05em;
  line-height: 1.5;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 40px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 20px 20px;
  }
`;

export const StyledList = styled.ul`
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding-left: 20px;
  }
`;

export const StyledListItem = styled.li`
  padding: 20px 0;
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
  }
`;
