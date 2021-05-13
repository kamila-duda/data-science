import React from "react";
import {
  Container,
  PicturesGrid,
  PictureWrapper,
  Image,
} from "./Teachers.styled";
import Male from "../../../src/assets/images/male.png";
import Female from "../../../src/assets/images/female.png";
import { SectionTitle, SmallerParagraph } from "../CommonStyle";

const Teachers = () => {
  return (
    <Container id="teachers">
      <SectionTitle>Prowadzący</SectionTitle>
      <PicturesGrid>
        <PictureWrapper data-aos="fade">
          <Image src={Male} />
          <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <Image src={Female} />
          <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <Image src={Male} />
          <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper data-aos="fade">
          <Image src={Female} />
          <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper>
          <Image src={Male} />
          <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper>
          <Image src={Female} />
          <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper>
          <Image src={Male} />
          <SmallerParagraph>Prof. dr hab. Jan Kowalski</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
        <PictureWrapper>
          <Image src={Female} />
          <SmallerParagraph>Prof. dr hab. Anna Kowalska</SmallerParagraph>
          <SmallerParagraph>Instytut czegoś tam</SmallerParagraph>
          <SmallerParagraph>mail: bla@pcz.pl</SmallerParagraph>
        </PictureWrapper>
      </PicturesGrid>
    </Container>
  );
};

export default Teachers;
