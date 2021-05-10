import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #374379 0%,
    #1f1735 100%
  );
`;

export const Wave = styled.img.attrs((props) => ({
  transform: props.offsetY,
}))`
  transform: translateY(${({ offsetY }) => `-${offsetY * 0.3}px`});
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    height: 50%;
  }
`;

export const LinksWrapper = styled.div.attrs((props) => ({
  transform: props.offsetY,
}))`
  transform: translateY(${({ offsetY }) => `-${offsetY * 0.8}px`});
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 20px;
  z-index: 1;
`;

export const Link = styled.a`
  display: block;
  padding: 10px;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
  }
  ${({ small }) =>
    small &&
    css`
      font-size: 18px;
      @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
        font-size: 14px;
      }
    `}
`;

export const Intro = styled.div.attrs((props) => ({
  transform: props.offsetY,
}))`
  transform: translateY(${({ offsetY }) => `-${offsetY * 0.3}px`});
  z-index: 1;
  width: 50%;
  margin: 0 auto 50px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 100%;
    padding: 20px;
  }
`;

export const Title = styled.h1`
  width: 100%;
  font-weight: 800;
  font-size: 64px;
  line-height: 75px;
  color: ${({ theme }) => theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 36px;
    line-height: 1.2;
    padding: 20px;
  }
`;

export const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.color.darknestWhite};
  outline: none;
  padding: 20px;
  margin: 10px;
  font-weight: bold;
  font-size: 18px;
  background: ${({ theme }) => theme.color.primaryColor};
  color: ${({ theme }) => theme.color.darknestWhite};
  box-shadow: 2px 2px 10px 1px #1a64ac;
  cursor: pointer;
  ${({ color }) =>
    color &&
    css`
      color: ${({ theme }) => theme.color.primaryColor};
      background: ${({ theme }) => theme.color.darknestWhite};
      border: 1px solid ${({ theme }) => theme.color.primaryColor};
    `}
  &:hover {
    color: ${({ theme }) => theme.color.darknestWhite};
    background: ${({ theme }) => theme.color.secondColor};
    border: 1px solid ${({ theme }) => theme.color.darknestWhite};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 120px;
    padding: 20px;
    margin: 5px;
    font-size: 14px;
  }
`;
