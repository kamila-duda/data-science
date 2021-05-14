import React from "react";
import { Container, LinksWrapper, StyledLink, Copy } from "./Footer.styled";

const Footer = () => {
  return (
    <Container>
      {" "}
      <LinksWrapper>
        <StyledLink href="https://www.pcz.pl/" target="_blank">
          Politechnika Częstochowska
        </StyledLink>
        <StyledLink small="true" href="https://wimii.pcz.pl/" target="_blank">
          Wydział Inżynierii Mechanicznej i Informatyki
        </StyledLink>
        <StyledLink
          smaller="true"
          href="http://www.iisi.pcz.pl/"
          target="_blank"
        >
          Katedra Inteligentnych Systemów Informatycznych
        </StyledLink>
      </LinksWrapper>
      <Copy>2021 ® Wszelkie prawa zastrzeżone</Copy>
    </Container>
  );
};

export default Footer;
