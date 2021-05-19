import React from "react";
import { SectionTitle, Paragraph } from "../CommonStyle";
import { Container, Wave } from "./Contact.styled";
import Wave1 from "../../../src/assets/svg/wave1.svg";
import Wave2 from "../../../src/assets/svg/wave2.svg";

const Contact = () => {
  return (
    <Container id="contact">
      <SectionTitle>
        Dane kontaktowe opiekuna kierunku Sztuczna Inteligencja i Data Science
      </SectionTitle>
      <Paragraph>
        Jeżeli jakieś kwestie nie zostały w wystarczający sposób przedstawione,
        albo nie chciałbyś się upewnić w dowolnej kwestii zapraszamy do
        kontaktu. Postaramy się jak najszybciej odpowiedzieć. Jesteśmy otwarci
        na wszelkie uwagi lub sugestie. Prosimy o kontakt z następującą osobą:
      </Paragraph>
      <Paragraph>
        Dr hab. Piotr Duda
        <br />
        Katedra Inteligentnych Systemów Informatycznych
        <br />
        ul. Armii Krajowej 32, 42-200 Częstochowa
        <br />
        pokój 416 <br />
        adres e-mail: piotr.duda@pcz.pl
      </Paragraph>
      <Wave src={Wave1} />
      <Wave src={Wave2} />
    </Container>
  );
};

export default Contact;
