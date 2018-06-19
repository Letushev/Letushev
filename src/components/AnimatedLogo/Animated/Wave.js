import React from 'react';
import { Arc } from 'react-konva';

const Wave = props => (
  <Arc
    x='160'
    y='160'
    innerRadius={ props.radius }
    outerRadius={ props.radius + props.width }
    fill={ props.color }
    angle={ props.angle }
    rotation='-90'
  />
);

export default Wave;
