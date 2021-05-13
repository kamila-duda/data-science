import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: ${({ theme }) => theme.color.primaryColor};
  letter-spacing: 0.05em;
  line-height: 1.5;
  z-index: 1;
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

export const Wave = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0.6;
  z-index: -1;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    height: 50%;
  }
`;
