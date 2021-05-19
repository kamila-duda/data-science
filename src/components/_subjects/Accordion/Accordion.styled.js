import styled, { css } from "styled-components";

export const AccordionItemWrapper = styled.div`
  padding: 20px;
  margin: 10px 0;
  border-radius: 25px;
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #0099ff 0%,
    #374379 100%
  );
  cursor: pointer;
  :hover {
    background: ${({ theme }) => theme.color.lighterPrimaryColor};
  }
`;

export const AccordionItemTitle = styled.h4`
  margin: 0;
`;

export const AccordionContent = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 12px;
  }
`;
