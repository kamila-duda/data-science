import styled, { css } from "styled-components";
import { Link } from "react-scroll";

export const StyledNav = styled.nav`
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #374379 0%,
    #1f1735 100%
  );
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  color: ${({ theme }) => theme.color.darknestWhite};
  z-index: 100;
`;

export const StyledHomeWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  font-size: 36px;
  display: flex;
  align-items: center;
`;

export const Language = styled.h2`
  margin: 10px;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 1px solid transparent;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.darknestWhite};
  }
`;

export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 10px;
  color: ${({ theme }) => theme.color.darknestWhite};
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }
`;

export const StyledNavItem = styled(Link)`
  position: relative;
  padding: 15px 30px;
  font-size: 18px;
  letter-spacing: 2px;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  text-transform: capitalize;
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 10px;
    font-size: 16px;
  }
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.color.secondColor};
  }
  &.active {
    border-bottom: 1px solid ${({ theme }) => theme.color.secondColor};
  }
`;

export const StyledIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.color.darknestWhite};
  border-radius: 50%;
  color: ${({ theme }) => theme.color.darknestWhite};
  cursor: pointer;
`;
export const StyledNavListMobile = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  height: 65vh;
  margin: -1000px 0 0px;
  ${({ open }) =>
    open &&
    css`
      margin: 0;
      background: radial-gradient(
        68.27% 242.48% at 65.38% 34.1%,
        #374379 0%,
        #1f1735 100%
      );
      ${StyledIcon} {
        transform: rotate(90deg);
      }
    `}
  @media (min-width: ${({ theme }) => theme.breakpoint.s}) {
    display: none;
  }
`;
