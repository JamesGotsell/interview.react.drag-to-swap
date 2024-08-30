import update from "immutability-helper";
export const moveImage = (imageIndex, imageHoverIndex, setImagesCb, images) => {
  const draggedImage = images[imageIndex];
  const swappedImage = update(images, {
    $splice: [
      [imageIndex, 1],
      [imageHoverIndex, 0, draggedImage],
    ],
  });
  setImagesCb(swappedImage);
};
