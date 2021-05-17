import styled, { css } from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  width: 30%;
  cursor: pointer;
`;

export const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px dashed ${({ theme }) => theme.color.darknestWhite};
`;

export const AccordionItemWrapper = styled.div`
  padding: 20px;
  margin: 10px;
  border-radius: 25px;
  background: radial-gradient(
    68.27% 242.48% at 65.38% 34.1%,
    #0099ff 0%,
    #374379 100%
  );
  :hover {
    background: ${({ theme }) => theme.color.lighterPrimaryColor};
  }
`;

export const AccordionItemTitle = styled.h4`
  margin: 0;
`;

export const AccordionTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
`;

export const AccordionContent = styled.p`
  margin: 10px 0 0 0;
  font-size: 14px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 12px;
  }
`;
