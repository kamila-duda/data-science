import React from "react";
import { SectionTitle, Paragraph } from "../CommonStyle";
import { Container, Wave } from "./Contact.styled";
import Wave1 from "../../../src/assets/svg/wave1.svg";
import Wave2 from "../../../src/assets/svg/wave2.svg";

const Contact = () => {
  return (
    <Container id="contact">
      <SectionTitle>Kontakt</SectionTitle>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero id eu
        sit non pharetra elementum varius consequat. Id porta in viverra magna.
        Dui et pellentesque nisl, mi erat risus. Lorem mi odio turpis elementum.
      </Paragraph>
      <Wave src={Wave1} />
      <Wave src={Wave2} />
    </Container>
  );
};

export default Contact;
