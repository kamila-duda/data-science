import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ref1, ref2, height, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    draw(context, ref1, ref2);
  }, []);

  return <canvas ref={canvasRef} {...rest} width={70} height={height} />;
};

export default Canvas;
