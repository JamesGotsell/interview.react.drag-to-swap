import { useEffect, useState } from "react";
import styles from "./imagelist.module.css";
import { ImageItem } from "../Image/Image";
import { moveImage } from "../utils/utils";

const ImageList = ({ imagesToRender }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(imagesToRender);
  }, [imagesToRender]);

  return (
    <section className={styles.renderImage}>
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
    </section>
  );
};

export default ImageList;
