import styled, { css } from "styled-components";

export const SectionTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: ${({ theme }) => theme.color.darknestWhite};
  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.color.fontColor};
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 22px;
  }
`;

export const SmallTitle = styled.h3`
  color: ${({ theme }) => theme.color.darknestWhite};
  text-transform: uppercase;
  font-size: 24px;
  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.color.fontColor};
    `}
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.darknestWhite};
  margin: 0;
  padding: 20px 0;
  letter-spacing: 0.02em;
  font-size: 24px;
  line-height: 1.5;
  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.color.fontColor};
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
  }
`;

export const SmallerParagraph = styled.p`
  color: ${({ theme }) => theme.color.darknestWhite};
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.color.fontColor};
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;
