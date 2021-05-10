import React from "react";
import { Container, Tile, TileGrid, Decor, Line } from "./Benefits.styled";
import DecorSvg from "../../../src/assets/svg/decor.svg";
import LineSvg from "../../../src/assets/svg/line.svg";
import {
  SmallerParagraph,
  Paragraph,
  SmallTitle,
  SectionTitle,
} from "../CommonStyle";

const Benefits = () => {
  return (
    <Container>
      <SectionTitle black>
        Zalety kierunku Data Science &amp; Artifical Inteligence
      </SectionTitle>
      <Paragraph black>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis risus
        massa vulputate donec a. Lorem eget risus imperdiet a hendrerit. Quis
        duis consequat, gravida facilisis fermentum venenatis ac. Id sit
        consectetur malesuada volutpat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Mattis risus massa vulputate donec a. Lorem eget risus
        imperdiet a hendrerit. Quis duis consequat, gravida facilisis fermentum
        venenatis ac. Id sit consectetur malesuada volutpat.
      </Paragraph>
      <TileGrid>
        <Tile data-aos="fade">
          <Decor src={DecorSvg} />
          <SmallTitle black>Test</SmallTitle>
          <Line src={LineSvg} />
          <SmallerParagraph black>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ut
            accumsan turpis purus porta. Ultrices posuere risus nulla commodo
            purus aliquam.
          </SmallerParagraph>
        </Tile>
        <Tile data-aos="fade">
          <Decor src={DecorSvg} />
          <SmallTitle black>Test</SmallTitle>
          <Line src={LineSvg} />
          <SmallerParagraph black>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ut
            accumsan turpis purus porta. Ultrices posuere risus nulla commodo
            purus aliquam.
          </SmallerParagraph>
        </Tile>
        <Tile data-aos="fade">
          <Decor src={DecorSvg} />
          <SmallTitle black>Test</SmallTitle>
          <Line src={LineSvg} />
          <SmallerParagraph black>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ut
            accumsan turpis purus porta. Ultrices posuere risus nulla commodo
            purus aliquam.
          </SmallerParagraph>
        </Tile>
        <Tile>
          <Decor src={DecorSvg} />
          <SmallTitle black>Test</SmallTitle>
          <Line src={LineSvg} />
          <SmallerParagraph black>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ut
            accumsan turpis purus porta. Ultrices posuere risus nulla commodo
            purus aliquam.
          </SmallerParagraph>
        </Tile>
        <Tile>
          <Decor src={DecorSvg} />
          <SmallTitle black>Test</SmallTitle>
          <Line src={LineSvg} />
          <SmallerParagraph black>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ut
            accumsan turpis purus porta. Ultrices posuere risus nulla commodo
            purus aliquam.
          </SmallerParagraph>
        </Tile>
        <Tile>
          <Decor src={DecorSvg} />
          <SmallTitle black>Test</SmallTitle>
          <Line src={LineSvg} />
          <SmallerParagraph black>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu ut
            accumsan turpis purus porta. Ultrices posuere risus nulla commodo
            purus aliquam.
          </SmallerParagraph>
        </Tile>
      </TileGrid>
    </Container>
  );
};

export default Benefits;
