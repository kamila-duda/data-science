import React, { useState } from "react";
import {
  TileItemWrapper,
  TileItemTitle,
  TileContent,
  Arrow,
} from "./Tile.styled";

const Tile = ({ data }) => {
  const [activeTile, setActiveTile] = useState("");
  return (
    <>
      {data.przedmioty.map(({ title, content, index }) => (
        <TileItemWrapper
          key={index + title}
          onMouseMove={() => setActiveTile(title)}
          onMouseLeave={() => setActiveTile("")}
        >
          <TileItemTitle>
            {activeTile === title
              ? title
              : title.length < 20
              ? title
              : `${title.substring(0, 20)}...`}
            <Arrow> {activeTile === title ? "⏫" : "⏬"}</Arrow>
          </TileItemTitle>
          <TileContent>{content}</TileContent>
        </TileItemWrapper>
      ))}
    </>
  );
};

export default Tile;
