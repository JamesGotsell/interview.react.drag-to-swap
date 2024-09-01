import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./image.module.css";

export const ImageItem = ({ image, index, moveImage, setImagesCb, images }) => {
  const [mouseEvent, setMouseEvent] = useState(false);

  const [, drop] = useDrop({
    accept: "Image",
    hover(item) {
      if (!ref.current) {
        return;
      }

      if (item.index === index) {
        return;
      }
      moveImage(item.index, index, setImagesCb, images);

      item.index = index;
    },
    drop() {
      setMouseEvent(false);
    },
  });
  const [, drag] = useDrag(() => ({
    type: "Image",
    item: { id: image.id, index },
    collect: (image) => {
      return {
        isDragging: image.isDragging(),
      };
    },
  }));
  const ref = useRef(null);
  drag(drop(ref));

  return (
    <div
      className={styles.printPhoto}
      key={image}
      ref={ref}
      onMouseDown={() => {
        setMouseEvent(true);
      }}
      onMouseUp={() => {
        setMouseEvent(false);
      }}
      onDragEnd={() => {
        setMouseEvent(false);
      }}
    >
      <img
        className={`${styles.img} ${mouseEvent ? styles.animate : styles.reverse}`}
        alt={`img-${image}`}
        src={image}
      />
    </div>
  );
};
