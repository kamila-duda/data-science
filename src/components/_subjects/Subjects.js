import React, { useRef, useEffect, useState } from "react";
import { SectionTitle } from "../CommonStyle";
import Accordion from "./Accordion/Accordion";
import Canvas from "./Canvas/Canvas";
import Canvas2 from "./Canvas/Canvas2";
import {
  AccordionsWrapper,
  Container,
  AccordionTitle,
  AccordionContainer,
  AccordionWrapper,
} from "./Subjects.styled";
import { przedmioty as accordionData } from "./przedmioty.js";

const Subjects = () => {
  const firstAccordionRef = useRef(null);
  const firstAccordion = firstAccordionRef.current;

  const secondAccordionRef = useRef(null);
  const secondAccordion = secondAccordionRef.current;

  const thirdAccordionRef = useRef(null);
  const thirdAccordion = thirdAccordionRef.current;

  const canvasFirstRef = useRef(null);
  const canvasSecondtRef = useRef(null);

  const checkHeight = useRef(null);

  const [isLoad, setIsLoad] = useState(false);
  const [height, setHeight] = useState(300);

  const draw = (ctx, ref1, ref2) => {
    ctx.strokeStyle = "#FFFFFF";

    for (let i = 0; i < ref1.childNodes.length; i++) {
      for (let j = 0; j < ref2.childNodes.length; j++) {
        ctx.beginPath();

        console.log(
          `wysokość pierwszego z subjects: ${
            ref1.childNodes[0].getBoundingClientRect().height
          }`
        );
        ctx.moveTo(
          0,
          ref1.childNodes[i].getBoundingClientRect().height / 2 +
            70 +
            (ref1.childNodes[i].getBoundingClientRect().height + 20) * i
        );
        ctx.lineTo(
          70,
          ref2.childNodes[j].getBoundingClientRect().height / 2 +
            70 +
            (ref2.childNodes[j].getBoundingClientRect().height + 20) * j
        );
        ctx.stroke();
      }
    }
  };
  const [isResize, setIsResize] = useState(false);
  const handleClick = () => {
    setIsResize(!isResize);
    setHeight(checkHeight.current.getBoundingClientRect().height);
  };

  useEffect(() => {
    if (firstAccordion && secondAccordion && thirdAccordion) {
      firstAccordion.addEventListener("click", handleClick);
      secondAccordion.addEventListener("click", handleClick);
      thirdAccordion.addEventListener("click", handleClick);

      return () => {
        firstAccordion.removeEventListener("click", handleClick);
        secondAccordion.removeEventListener("click", handleClick);
        thirdAccordion.removeEventListener("click", handleClick);
      };
    }
  }, [isResize, firstAccordion, secondAccordion, thirdAccordion, handleClick]);

  useEffect(() => {
    setIsLoad(true);
    setHeight(checkHeight.current.getBoundingClientRect().height);
  }, []);

  return (
    <Container id="subjects">
      <SectionTitle>Przedmioty</SectionTitle>
      <AccordionsWrapper>
        <AccordionContainer>
          <AccordionTitle>sem.I</AccordionTitle>
          <AccordionWrapper ref={firstAccordionRef}>
            <Accordion data={accordionData} />
          </AccordionWrapper>
        </AccordionContainer>
        {isLoad && canvasFirstRef && (
          <Canvas
            draw={draw}
            ref1={firstAccordion}
            ref2={secondAccordion}
            isResize={isResize}
            height={height}
          />
        )}
        <AccordionContainer ref={checkHeight}>
          <AccordionTitle>sem.II</AccordionTitle>
          <AccordionWrapper ref={secondAccordionRef}>
            <Accordion data={accordionData} />
          </AccordionWrapper>
        </AccordionContainer>
        {isLoad && canvasSecondtRef && (
          <Canvas
            draw={draw}
            ref1={secondAccordion}
            ref2={thirdAccordion}
            isResize={isResize}
          />
        )}
        <AccordionContainer>
          <AccordionTitle>sem.III</AccordionTitle>
          <AccordionWrapper ref={thirdAccordionRef}>
            <Accordion data={accordionData} />
          </AccordionWrapper>
        </AccordionContainer>
      </AccordionsWrapper>
    </Container>
  );
};

export default Subjects;
