import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionItemWrapper,
  AccordionItemTitle,
  AccordionContent,
  AccordionTitle,
  AccordionWrapper,
} from "./Accordion.styled";

const Accordion = ({ data, accordionTitle }) => {
  const [isActive, setIsActive] = useState("");

  return (
    <AccordionContainer>
      <AccordionTitle>{accordionTitle}</AccordionTitle>
      <AccordionWrapper>
        {data.map(({ title, content, index }) => (
          <AccordionItemWrapper
            key={index}
            onClick={() => setIsActive(title === isActive ? "" : title)}
          >
            <AccordionItemTitle>{title}</AccordionItemTitle>
            {isActive === title && (
              <AccordionContent>{content}</AccordionContent>
            )}
          </AccordionItemWrapper>
        ))}
      </AccordionWrapper>
    </AccordionContainer>
  );
};

export default Accordion;
