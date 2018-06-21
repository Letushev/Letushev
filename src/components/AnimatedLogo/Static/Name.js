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
        text='Olexiy'
        fontFamily={ fontFamily }
        fontSize={ fontSize }
        fill='#292f33'
      />
      <Text
        x='0'
        y='15'
        text='Letushev'
        fontFamily={ fontFamily }
        fontSize={ fontSize }
        fill='#292f33'
      />
      <Text
        x='0'
        y='40'
        text='Front-end'
        fontFamily={ fontFamily }
        fontSize={ fontSize }
        fill='#007cba'
      />
      <Text
        x='0'
        y='55'
        text='Developer'
        fontFamily={ fontFamily }
        fontSize={ fontSize }
        fill='#007cba'
      />
    </Group>
  );
}

export default Name;
