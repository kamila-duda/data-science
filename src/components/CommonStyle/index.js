import styled from "styled-components";

export const SectionTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: ${({ theme, black }) =>
    black ? theme.color.fontColor : theme.color.darknestWhite};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 22px;
  }
`;

export const SmallTitle = styled.h3`
  color: ${({ theme, black }) =>
    black ? theme.color.fontColor : theme.color.darknestWhite};
  text-transform: uppercase;
  font-size: 24px;
`;

export const Paragraph = styled.p`
  color: ${({ theme, black }) =>
    black ? theme.color.fontColor : theme.color.darknestWhite};
  margin: 0;
  padding: 20px 0;
  letter-spacing: 0.02em;
  font-size: 24px;
  line-height: 1.5;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;

export const SmallerParagraph = styled.p`
  color: ${({ theme, black }) =>
    black ? theme.color.fontColor : theme.color.darknestWhite};
  font-size: 18px;
  line-height: 30px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 14px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 13px;
  }
`;
