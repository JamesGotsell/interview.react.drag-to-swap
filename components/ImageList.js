import { useEffect, useState } from "react";
import styled from "styled-components";
import update from "immutability-helper";
import { Image } from "./image";

const RenderImage = styled.section`
  display: flex;
`;
const ImageList = ({ imagesToRender }) => {
  const [images, setImages] = useState([]);

  const moveImage = (imageIndex, imageHoverIndex) => {
    const draggedImage = images[imageIndex];
    setImages(
      update(images, {
        $splice: [
          [imageIndex, 1],
          [imageHoverIndex, 0, draggedImage],
        ],
      }),
    );
  };

  useEffect(() => {
    setImages(imagesToRender);
  }, [imagesToRender]);

  return (
    <RenderImage>
      {images?.map((image, index) => {
        return (
          <Image
            image={image}
            index={index}
            key={`${image}-image`}
            moveImage={moveImage}
          />
        );
      })}
    </RenderImage>
  );
};

export default ImageList;
