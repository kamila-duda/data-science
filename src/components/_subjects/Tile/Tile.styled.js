import styled, { css } from "styled-components";

export const TileItemTitle = styled.h4`
  margin: 0;
  font-size: 12px;
`;

export const Arrow = styled.span`
  position: absolute;
  content: "";
  top: 15%;
  right: 10px;
`;

export const TileContent = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: ${({ theme }) => theme.color.lighterPrimaryColor};
  margin: 0;
  font-size: 12px;
  padding: 70px 10px 20px;
  border-radius: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 12px;
  }
`;

export const Content = styled.p`
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;

export const TileItemWrapper = styled.div`
  padding: 10px;
  margin: 10px 0;
  height: 50px;
  border-radius: 20px;
  position: relative;
  z-index: 0;
  cursor: url(assets/cursor.svg), auto;
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #0099ff 0%,
    #374379 100%
  );
  :hover {
    z-index: 1;
    ${TileContent} {
      display: block;
    }
    background: ${({ theme }) => theme.color.lighterPrimaryColor};
  }
  ${({ isEnglish }) =>
    isEnglish &&
    css`
      background: radial-gradient(
        68.27% 242.48% at 65.38% 34.1%,
        #ff253a 0%,
        #0044ff 100%
      );
      :hover {
        ${TileContent} {
          background: #ff253a;
        }
      }
    `}
  ${({ isYellow }) =>
    isYellow &&
    css`
      background: #e87c0c;
      :hover {
        ${TileContent} {
          background: #e87c0c;
        }
      }
    `}
  ${({ another }) =>
    another &&
    css`
      width: 180px;
      margin: 10px;
    `}
  @media (max-width: ${({ theme }) => theme.breakpoint.canvas}) {
    margin: 10px;
  }
`;
