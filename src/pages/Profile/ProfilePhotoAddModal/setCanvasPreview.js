function setCanvasPreview ( image, canvas, crop){
  if (!crop || !canvas || !image) {
    return;
  }

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  const ctx = canvas.getContext('2d');
  const pixelRatio = window.devicePixelRatio;

  canvas.width = crop.width * pixelRatio * scaleX;
  canvas.height = crop.height * pixelRatio * scaleY;

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  ctx.scale(pixelRatio, pixelRatio);
  ctx.translate(-cropX, -cropY);
  ctx.imageSmoothingQuality = 'high';

  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );
}
export default setCanvasPreview;


// console.log({
//     'cropX': cropX,
//     'cropY': cropY,
//     'scaleX': scaleX,
//     'scaleY': scaleY,
//     'pixelRatio': pixelRatio,
//     'image.naturalWidth': image.naturalWidth,
//     'image.naturalHeight': image.naturalHeight,
//     'image.width': image.width,
//     'image.height': image.height,
//   })