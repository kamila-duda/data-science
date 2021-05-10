import React, { useState, useEffect } from "react";
import {
  Container,
  Wave,
  Title,
  Intro,
  Button,
  ButtonsWrapper,
  LinksWrapper,
  Link,
} from "./Home.styled";
import Wave1 from "../../../src/assets/svg/wave1.svg";
import Wave2 from "../../../src/assets/svg/wave2.svg";

const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container>
      <Intro offsetY={offsetY}>
        <Title>Data Science &amp; Artificial Inteligence</Title>
        <ButtonsWrapper>
          <Button color>Informacje</Button>
          <Button>Przedmioty</Button>
        </ButtonsWrapper>
      </Intro>
      <LinksWrapper offsetY={offsetY}>
        <Link href="https://www.pcz.pl/" target="_blank">
          Politechnika Częstochowska
        </Link>
        <Link small href="https://wimii.pcz.pl/" target="_blank">
          Wydział Inżynierii Mechanicznej i Informatyki
        </Link>
      </LinksWrapper>
      <Wave src={Wave1} offsetY={offsetY} />
      <Wave src={Wave2} offsetY={offsetY} />
    </Container>
  );
};

export default Home;
