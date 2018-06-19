import React from 'react';
import { Group, Text } from 'react-konva';

const Name = () => {
  const fontSize = 14;
  const fontFamily = 'monospace';
  return (
    <Group x='170' y='125'>
      <Text
        x='0'
        y='0'
        width='70'
        text='Olexiy Letushev'
        fontFamily={ fontFamily }
        fontSize={ fontSize }
        fill='#292f33'
      />
      <Text
        x='0'
        y='40'
        width='80'
        text='Front-end Developer'
        fontFamily={ fontFamily }
        fontSize={ fontSize }
        fill='#007cba'
      />
    </Group>
  );
}

export default Name;
