import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";

const PrintPhoto = styled.div`
  width: calc(50% - 10px);
  .img {
    max-width: 100%;
    display: block;
    border: solid;
  }
  .img.animate {
    clip-path: circle(25%);
    transition: clip-path 0.1s linear;
  }
  .img.reverse {
    clip-path: circle(75%);
    transition: clip-path 0.1s linear;
  }
`;

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
    <PrintPhoto
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
        alt={`img-${image}`}
        src={image}
        className={`img ${mouseEvent ? "animate" : "reverse"}`}
      />
    </PrintPhoto>
  );
};
