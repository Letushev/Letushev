import React from "react";
import { Image } from "react-konva";

const LogoImage = props => (
  <Image 
    image={ props.image } 
    x='60'
    y='90'
    width='150'
    height='150'
  />
);

export default LogoImage;
