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
  TitleContainer,
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

  const [isLoad, setIsLoad] = useState(false);
  const [parentHeight, setParentHeight] = useState(700);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("load", () => setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener("load", () =>
        setWindowWidth(window.innerWidth)
      );
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () =>
        setWindowWidth(window.innerWidth)
      );
  }, [window.innerWidth]);

  const draw = (ctx, ref1, ref2) => {
    ctx.strokeStyle = "#FFFFFF";

    for (let i = 0; i < ref1.childNodes.length; i++) {
      for (let j = 0; j < ref2.childNodes.length; j++) {
        ctx.beginPath();
        ctx.moveTo(
          0,
          ref1.childNodes[i].getBoundingClientRect().height / 2 +
            40 +
            (parentHeight - ref1.getBoundingClientRect().height) / 2 +
            (ref1.childNodes[i].getBoundingClientRect().height + 20) * i
        );
        ctx.lineTo(
          100,
          ref2.childNodes[j].getBoundingClientRect().height / 2 +
            40 +
            (parentHeight - ref2.getBoundingClientRect().height) / 2 +
            (ref2.childNodes[j].getBoundingClientRect().height + 20) * j
        );
        ctx.stroke();
      }
    }
  };

  useEffect(() => {
    if (parent) {
      setParentHeight(parent.getBoundingClientRect().height);
    }
  }, [isLoad, parent]);

  useEffect(() => {
    setIsLoad(true);
  }, []);

  return (
    <Container id="subjects">
      <TitleContainer>
        <SectionTitle>Przedmioty</SectionTitle>
      </TitleContainer>
      <TilesWrapper ref={parentRef}>
        <ImageWrapper ref={fiveTileRef}>
          <Image src={Before} />
        </ImageWrapper>
        {isLoad && windowWidth > 1130 && (
          <Canvas
            draw={draw}
            ref1={fiveTile}
            ref2={firstTile}
            height={parentHeight}
          />
        )}
        <TileContainer>
          <TileTitle>sem.I</TileTitle>
          <TileWrapper ref={firstTileRef}>
            <Tile data={TileData[0]} />
          </TileWrapper>
        </TileContainer>
        {isLoad && windowWidth > 1130 && (
          <Canvas
            draw={draw}
            ref1={firstTile}
            ref2={secondTile}
            height={parentHeight}
          />
        )}
        <TileContainer>
          <TileTitle>sem.II</TileTitle>
          <TileWrapper ref={secondTileRef}>
            <Tile data={TileData[1]} />
          </TileWrapper>
        </TileContainer>
        {isLoad && windowWidth > 1130 && (
          <Canvas
            draw={draw}
            ref1={secondTile}
            ref2={thirdTile}
            height={parentHeight}
          />
        )}
        <TileContainer>
          <TileTitle>sem.III</TileTitle>
          <TileWrapper ref={thirdTileRef}>
            <Tile data={TileData[2]} />
          </TileWrapper>
        </TileContainer>
        {isLoad && windowWidth > 1130 && (
          <Canvas
            draw={draw}
            ref1={thirdTile}
            ref2={fourthTile}
            height={parentHeight}
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
