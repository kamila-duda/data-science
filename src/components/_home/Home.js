import React from "react";
import {
  Container,
  Wave,
  Title,
  Intro,
  Button,
  ButtonsWrapper,
  LinksWrapper,
  StyledLink,
} from "./Home.styled";
import Wave1 from "../../../src/assets/svg/wave1.svg";
import Wave2 from "../../../src/assets/svg/wave2.svg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <Container id="home">
      <Intro>
        <Title>Data Science &amp; Artificial Inteligence</Title>
        <ButtonsWrapper>
          <Button color={true}>
            <Link to={"information"} offset={-100} spy={true} smooth={true}>
              Informacje
            </Link>
          </Button>
          <Button>
            <Link to={"subjects"} offset={-100} spy={true} smooth={true}>
              Przedmioty
            </Link>
          </Button>
        </ButtonsWrapper>
      </Intro>
      <LinksWrapper>
        <StyledLink href="https://www.pcz.pl/" target="_blank">
          Politechnika Częstochowska
        </StyledLink>
        <StyledLink small={true} href="https://wimii.pcz.pl/" target="_blank">
          Wydział Inżynierii Mechanicznej i Informatyki
        </StyledLink>
      </LinksWrapper>
      <Wave src={Wave1} />
      <Wave src={Wave2} />
    </Container>
  );
};

export default Home;
