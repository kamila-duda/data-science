import styled, { css } from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  padding: 30px 20px 0px;
  background: ${({ theme }) => theme.color.primaryColor};
  letter-spacing: 0.05em;
  line-height: 1.5;
  z-index: 1;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 10px;
  }
`;

export const LinksWrapper = styled.div`
  width: 100%;
  z-index: 1;
`;

export const StyledLink = styled.a`
  display: block;
  padding: 5px 0;
  font-size: 13px;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 11px;
  }
  ${({ small }) =>
    small &&
    css`
      font-size: 12px;
      text-transform: capitalize;
      @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        font-size: 10px;
      }
    `}
  :hover {
    color: ${({ theme }) => theme.color.secondColor};
  }
`;

export const Copy = styled.p`
  width: 100%;
  margin: 0;
  padding: 30px 0 20px;
  font-size: 10px;
  text-align: center;
`;
