import styled, { css } from "styled-components";

export const TileItemTitle = styled.h4`
  margin: 0;
`;

export const TileContent = styled.p`
  display: none;
  position: absolute;
  left: 0;
  background: ${({ theme }) => theme.color.lighterPrimaryColor};
  z-index: 1;
  margin: 0;
  font-size: 14px;
  padding: 20px;
  border-radius: 0 0 25px 25px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 12px;
  }
`;

export const TileItemWrapper = styled.div`
  padding: 20px;
  margin: 10px 0;
  border-radius: 25px;
  position: relative;
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #0099ff 0%,
    #374379 100%
  );
  :hover {
    ${TileContent} {
      display: block;
    }
    background: ${({ theme }) => theme.color.lighterPrimaryColor};
  }
`;
