import React, { useRef, useEffect, useState } from "react";
import { SectionTitle } from "../CommonStyle";
import Tile from "./Tile/Tile";
import Arrow from "./../../assets/svg/arrow.svg";
import After from "./../../assets/svg/afterStudy.svg";
import Before from "./../../assets/svg/beforeStudy.svg";
import Canvas from "./Canvas/Canvas";
import {
  TilesWrapper,
  Container,
  TileTitle,
  TileContainer,
  TileWrapper,
  Image,
  ImageWrapper,
} from "./Subjects.styled";
import { przedmioty as TileData } from "./przedmioty.js";

const Subjects = () => {
  const firstTileRef = useRef(null);
  const firstTile = firstTileRef.current;

  const secondTileRef = useRef(null);
  const secondTile = secondTileRef.current;

  const thirdTileRef = useRef(null);
  const thirdTile = thirdTileRef.current;

  const fourthTileRef = useRef(null);
  const fourthTile = fourthTileRef.current;

  const fiveTileRef = useRef(null);
  const fiveTile = fiveTileRef.current;

  const parentRef = useRef(null);
  const parent = parentRef.current;

  const checkHeight = useRef(null);

  const [isLoad, setIsLoad] = useState(false);
  const [height, setHeight] = useState(300);
  const [parentHeight, setParentHeight] = useState(300);

  const draw = (ctx, ref1, ref2) => {
    ctx.strokeStyle = "#FFFFFF";

    for (let i = 0; i < ref1.childNodes.length; i++) {
      for (let j = 0; j < ref2.childNodes.length; j++) {
        ctx.beginPath();
        ctx.moveTo(
          0,
          ref1.childNodes[i].getBoundingClientRect().height / 2 +
            80 +
            (parentHeight - ref1.getBoundingClientRect().height) / 2 +
            (ref1.childNodes[i].getBoundingClientRect().height + 20) * i
        );
        ctx.lineTo(
          70,
          ref2.childNodes[j].getBoundingClientRect().height / 2 +
            80 +
            (parentHeight - ref2.getBoundingClientRect().height) / 2 +
            (ref2.childNodes[j].getBoundingClientRect().height + 20) * j
        );
        ctx.stroke();
      }
    }
  };

  console.log(parentHeight);
  useEffect(() => {
    setIsLoad(true);
    setHeight(checkHeight.current.getBoundingClientRect().height);
    if (parent) {
      setParentHeight(parent.getBoundingClientRect().height);
    }

    console.log(parentHeight);
  }, []);

  return (
    <Container id="subjects">
      <SectionTitle>Przedmioty</SectionTitle>

      <TilesWrapper ref={parentRef}>
        <ImageWrapper ref={fiveTileRef}>
          <Image src={Before} />
        </ImageWrapper>
        {isLoad && (
          <Canvas
            draw={draw}
            ref1={fiveTile}
            ref2={firstTile}
            height={height}
          />
        )}
        <TileContainer>
          <TileTitle>sem.I</TileTitle>
          <TileWrapper ref={firstTileRef}>
            <Tile data={TileData[0]} />
          </TileWrapper>
        </TileContainer>
        {isLoad && (
          <Canvas
            draw={draw}
            ref1={firstTile}
            ref2={secondTile}
            height={height}
          />
        )}
        <TileContainer ref={checkHeight}>
          <TileTitle>sem.II</TileTitle>
          <TileWrapper ref={secondTileRef}>
            <Tile data={TileData[1]} />
          </TileWrapper>
        </TileContainer>
        {isLoad && (
          <Canvas
            draw={draw}
            ref1={secondTile}
            ref2={thirdTile}
            height={height}
          />
        )}
        <TileContainer>
          <TileTitle>sem.III</TileTitle>
          <TileWrapper ref={thirdTileRef}>
            <Tile data={TileData[2]} />
          </TileWrapper>
        </TileContainer>
        {isLoad && (
          <Canvas
            draw={draw}
            ref1={thirdTile}
            ref2={fourthTile}
            height={height}
          />
        )}
        <div ref={fourthTileRef}>
          <ImageWrapper>
            <Image src={Arrow} />
            <Image src={After} />
          </ImageWrapper>
        </div>
      </TilesWrapper>
    </Container>
  );
};

export default Subjects;
