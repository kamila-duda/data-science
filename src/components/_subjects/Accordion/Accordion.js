import React, { useState } from "react";
import {
  AccordionItemWrapper,
  AccordionItemTitle,
  AccordionContent,
} from "./Accordion.styled";

const Accordion = ({ data }) => {
  const [isActive, setIsActive] = useState("");

  return (
    <>
      {data.map(({ title, content, index }) => (
        <AccordionItemWrapper
          key={index + title}
          onClick={() => setIsActive(title === isActive ? "" : title)}
        >
          <AccordionItemTitle>{title}</AccordionItemTitle>
          {isActive === title && <AccordionContent>{content}</AccordionContent>}
        </AccordionItemWrapper>
      ))}
    </>
  );
};

export default Accordion;
