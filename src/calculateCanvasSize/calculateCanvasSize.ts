export default function calculateCanvasSize(
  length: number,
  width: number
) {
  if (length < 0){
    throw new Error("Canvas Length should be possitive");
  }
  if (length == 0){
    throw new Error("Length should not be zero");
  }
  if (width < 0){
    throw new Error("Canvas width should be possitive");
  }
  if (width == 0){
    throw new Error("width should not be zero");
  }
 
 
  return length * width;
}
