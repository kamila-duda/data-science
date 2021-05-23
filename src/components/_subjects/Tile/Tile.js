import React, { useState } from "react";
import {
  TileItemWrapper,
  TileItemTitle,
  TileContent,
  Content,
  Arrow,
} from "./Tile.styled";

const Tile = ({ data, another }) => {
  const [activeTile, setActiveTile] = useState("");
  return (
    <>
      {data.przedmioty.map(({ title, content, list, lang, color, index }) => (
        <TileItemWrapper
          another={another}
          isEnglish={lang === "en"}
          isYellow={color ? true : false}
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
          <TileContent>
            <Content>{content}</Content>
            {list?.map((item, index) => {
              return (
                <Content key={index} bold={true}>
                  {item}
                </Content>
              );
            })}
          </TileContent>
        </TileItemWrapper>
      ))}
    </>
  );
};

export default Tile;
