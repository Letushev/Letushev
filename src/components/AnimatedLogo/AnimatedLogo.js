import React, { Component } from 'react';

import Loader from '../UI/Loader/Loader';
import Dome from './Static/Dome';
import LogoImage from './Static/LogoImage';
import Name from './Static/Name';
import Wave from './Animated/Wave';

import logoSVG from '../../assets/images/logo.svg';
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';

class AnimatedLogo extends Component {
  state = {
    logo: null,
    animated: true,
    waves: [
      { 
        angle: 0,
        radius: 102, 
        color: '#90CAF9', 
        clockwise: true, 
        width: 10
      },
      {
        angle: 0,
        radius: 112, 
        color: '#49ade2', 
        clockwise: true, 
        width: 10
      },
      {
        angle: 0,
        radius: 122, 
        color: '#008dd2', 
        clockwise: true, 
        width: 10
      },
      { 
        angle: 0,
        radius: 132, 
        color: '#007cba', 
        clockwise: true, 
        width: 10
      }
    ]
  }

  componentDidMount() {
    const logo = new Image();
    logo.src = logoSVG;
    logo.onload = () => {
      this.drawWaves();
      this.setState({ logo: logo });
    }
  }

  drawWaves() {
    this.animation = new Konva.Animation(frame => {
      const updatedWaves = [];
      this.state.waves.forEach(wave => {
        let clockwise = wave.clockwise;

        if (wave.angle >= 360) {
          clockwise = false;
        } else if (wave.angle <= 270) {
          clockwise = true;
        }

        let angle = clockwise ?
          wave.angle + (15 * frame.timeDiff / wave.radius) : 
          wave.angle - (15 * frame.timeDiff / wave.radius);
        
        // prevent strange angle increasing and decresing
        // when visiting other pages
        if (angle < 270 && clockwise === false) {
          angle = 270;
        } else if (angle > 360) {
          angle = 360;
        }

        updatedWaves.push({
          ...wave,
          clockwise: clockwise,
          angle: angle
        });
      });
      
      this.setState({ waves: updatedWaves });
    }, this.refs.animatedLayer);

    this.animation.start();
  }

  componentWillUnmount() {
    this.animation.stop();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.animated !== nextProps.animated) {
      return { animated: nextProps.animated };
    } else {
      return null;
    }
  }

  render() {
    if (!!this.animation) {
      if (this.state.animated) {
        this.animation.start();
      } else {
        this.animation.stop();
      }
    }

    const staticLayer = (
      <Layer hitGraphEnabled={ false }>
        <Dome />
        <LogoImage image={ this.state.logo } />
        <Name/>
      </Layer>
    );

    const animatedLayer = (
      <Layer hitGraphEnabled={ false } ref='animatedLayer'>
        {
          this.state.waves.map(wave => (
            <Wave
              key={ wave.radius }
              radius={ wave.radius }
              angle={ wave.angle }
              color={ wave.color }
              clockwise={ wave.clockwise }
              width={ wave.width }
            />
          ))
        }
      </Layer>
    );
    

    return (
      !this.state.logo ? <Loader /> :
      <Stage 
        className='fadeIn'
        width={ 320 } 
        height={ 320 }
      >
        { staticLayer }
        { animatedLayer }
      </Stage>
    );
  }
}

export default AnimatedLogo;
