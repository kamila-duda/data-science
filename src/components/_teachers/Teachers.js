import React from "react";
import {
  Container,
  PicturesGrid,
  PictureWrapper,
  Image,
  StyledLink,
} from "./Teachers.styled";
import Male from "../../../src/assets/images/male.png";
import Female from "../../../src/assets/images/female.png";
import Piotr from "../../../src/assets/images/PD.jpg";
import { SectionTitle, SmallerParagraph } from "../CommonStyle";

const Teachers = () => {
  return (
    <Container id="teachers">
      <SectionTitle>Prowadzący</SectionTitle>
      <PicturesGrid>
        <PictureWrapper data-aos="fade">
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Piotr} />
            <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Female} />
            <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          {" "}
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Male} />
            <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Piotr} />
            <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Female} />
            <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          {" "}
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Male} />
            <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Piotr} />
            <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <StyledLink
            href="http://www.iisi.pcz.pl/~pduda/index.php"
            target="_blank"
          >
            <Image src={Female} />
            <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
            <SmallerParagraph>Katedra czegoś tam</SmallerParagraph>
            <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
          </StyledLink>
        </PictureWrapper>
      </PicturesGrid>
    </Container>
  );
};

export default Teachers;
