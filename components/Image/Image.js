import styled from "styled-components";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
const PrintPhoto = styled.div`
  width: calc(50% - 10px);
  .img {
    max-width: 100%;
    clip-path: circle(75%);
     background: transparent
    cursor: pointer;
    display:block;
    animation-play-state: paused;
     border: solid;

  }
  .img:hover {
     clip-path: circle(25%);
      border: 1px solid black;
      transition: clip-path 0.1s linear;
      animation-play-state: running;
      animation-iteration-count: 1;
  }
`;

export const Image = ({ image, index, moveImage, setImagesCb, images }) => {
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
    <PrintPhoto key={image} ref={ref} className="Image-item">
      <span className="wrapper">
        <img alt={`img-${image}`} src={image} className="img" />
      </span>
    </PrintPhoto>
  );
};
