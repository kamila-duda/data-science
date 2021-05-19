import React from "react";
import { TileItemWrapper, TileItemTitle, TileContent } from "./Tile.styled";

const Tile = ({ data }) => {
  return (
    <>
      {data.przedmioty.map(({ title, content, index }) => (
        <TileItemWrapper key={index + title}>
          <TileItemTitle>{title}</TileItemTitle>
          <TileContent>{content}</TileContent>
        </TileItemWrapper>
      ))}
    </>
  );
};

export default Tile;
