import * as THREE from "three";

export const useTexture = (color) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = 512;
  canvas.height = 512;

  const gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );
  const colors = color?.split(", ");
  gradient?.addColorStop(0, colors[0]);
  gradient?.addColorStop(1, colors[1]);

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  return new THREE.CanvasTexture(canvas);
};
