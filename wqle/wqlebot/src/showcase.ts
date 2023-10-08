import { createCanvas } from "canvas";

export function showcase(wqle: string) {
  const canvas = createCanvas(200, 200);
  const ctx = canvas.getContext("2d");
  const fontPx = 16;

  ctx.font = `${fontPx}px Arial`;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.fillText(wqle, 10, 10 + fontPx);

  return canvas.toBuffer();
}
