import React from 'react';
import styles from './Home.scss';
import AnimatedLogo from '../AnimatedLogo/AnimatedLogo';

const Home = props => (
  <div className={ styles['canvas-container'] }>
    <AnimatedLogo animated={ !props.sidebarIsShown }/>
  </div>
)
  
export default Home;