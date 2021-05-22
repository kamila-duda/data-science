import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const { draw, ref1, ref2, height, ...rest } = props;
  const canvasRef = useRef(null);

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
    const context = canvas.getContext("2d");
    clearCanvas(canvas);
    draw(context, ref1, ref2);
  }, [canvasRef, draw, ref1, ref2, height]);

  return <canvas ref={canvasRef} {...rest} width={100} height={height} />;
};

export default Canvas;
