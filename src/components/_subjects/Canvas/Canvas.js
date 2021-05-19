import React, { useRef, useEffect, useState } from "react";

const Canvas = (props) => {
  const { draw, ref1, ref2, isResize, height, ...rest } = props;
  // const [isResize, setIsResize] = useState(false);
  const canvasRef = useRef(null);
  // const handleClick = () => {
  //   setIsResize(!isResize);
  // };

  // useEffect(() => {
  //   ref1.addEventListener("click", handleClick);
  //   ref2.addEventListener("click", handleClick);
  //   return () => {
  //     ref1.removeEventListener("click", handleClick);
  //     ref2.removeEventListener("click", handleClick);
  //   };
  // }, [isResize]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context, ref1, ref2);
  }, []);

  function clearCanvas(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.save();
    ctx.globalCompositeOperation = "copy";
    ctx.strokeStyle = "transparent";
    ctx.beginPath();
    ctx.lineTo(0, 0);
    ctx.stroke();
    ctx.restore();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    clearCanvas(canvas);
    const context = canvas.getContext("2d");
    console.log(
      `wysokość pierwszego z canvass: ${
        ref1.childNodes[0].getBoundingClientRect().height
      }`
    );
    draw(context, ref1, ref2);
  }, [isResize]);

  return <canvas ref={canvasRef} {...rest} width={70} height={height} />;
};

export default Canvas;
