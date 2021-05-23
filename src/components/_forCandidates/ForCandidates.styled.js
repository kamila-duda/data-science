import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: linear-gradient(179.22deg, #1f1735 10.27%, #1a64ac 127.55%);
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

export const Title = styled.h4`
  margin: 30px 0 0;
`;

export const StyledList = styled.ul`
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding-left: 20px;
  }
`;

export const StyledListItem = styled.li`
  padding: 20px 0;
  font-size: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 13px;
  }
`;

export const StyledLink = styled.a`
  padding: 10px;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.lighterPrimaryColor};
  :hover {
    color: ${({ theme }) => theme.color.secondColor};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;
