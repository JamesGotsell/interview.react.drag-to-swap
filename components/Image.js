import styled from "styled-components";
import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
const PrintPhoto = styled.div`
  width: calc(50% - 10px);

  img {
    max-width: 100%;
    width:  ${(props) => (props.$clicked ? "200px" : "100%")};
    border-radius:  ${(props) => (props.$clicked ? "50%" : "0%")};
  }
  background-color ${(props) => (props.$clicked ? "blue" : "red")};

`;

export const Image = ({ image, index, moveImage }) => {
  const [clicked, setClick] = useState(false);
  const [, drop] = useDrop({
    accept: "Image",
    hover(item) {
      if (!ref.current) {
        return;
      }

      if (item.index === index) {
        return;
      }
      moveImage(item.index, index);

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
    <PrintPhoto
      key={image}
      ref={ref}
      className="Image-item"
      onMouseDown={() => {
        setClick(!clicked);
      }}
      onMouseUp={() => {
        setClick(clicked);
      }}
      $clicked={!clicked}
    >
      <img alt={`img-${image}`} src={image} className="img" />
    </PrintPhoto>
  );
};
