import React from "react";
import { SectionTitle } from "../CommonStyle";
import Accordion from "./Accordion/Accordion";
import Canvas from "./Canvas/Canvas";
import { AccordionsWrapper, Container } from "./Subjects.styled";

const Subjects = () => {
  const draw = (ctx) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(50, 100, 20, 0, 2 * Math.PI);
    ctx.fill();
  };
  const accordionData = [
    {
      title: "Section 1",
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
    },
    {
      title: "Section 2",
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
    },
    {
      title: "Section 3",
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
    },
  ];
  return (
    <Container id="subjects">
      <SectionTitle>Przedmioty</SectionTitle>
      <AccordionsWrapper>
        <Accordion data={accordionData} accordionTitle="sem.I" />
        <Canvas draw={draw} />
        <Accordion data={accordionData} accordionTitle="sem.II" />
        <Accordion data={accordionData} accordionTitle="sem.III" />
      </AccordionsWrapper>
    </Container>
  );
};

export default Subjects;
