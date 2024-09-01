import { useEffect, useState } from "react";
import styled from "styled-components";
import { ImageItem } from "../Image/Image";
import { moveImage } from "../utils/utils";

const RenderImage = styled.section`
  display: flex;
`;
const ImageList = ({ imagesToRender }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesToRender);
  }, [imagesToRender]);

  return (
    <RenderImage>
      {images?.map((image, index) => {
        return (
          <ImageItem
            role="image"
            image={image}
            index={index}
            key={`${image}-image`}
            moveImage={moveImage}
            images={images}
            setImagesCb={setImages}
          />
        );
      })}
    </RenderImage>
  );
};

export default ImageList;
