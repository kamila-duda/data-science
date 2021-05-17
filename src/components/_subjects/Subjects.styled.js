import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 160px 100px 20px;
  background: ${({ theme }) => theme.color.primaryColor};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 60px 40px 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 60px 20px 20px;
  }
`;

export const AccordionsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const AccordionTitle = styled.h3`
  margin: 0;
`;
