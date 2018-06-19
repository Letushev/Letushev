import React from 'react';
import styles from './Hamburger.scss';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles);

const Hamburger = props => {
  const hamburgerClasses = classes('hamburger', {
    'hamburger--arrow': props.arrow
  });

  return (
    <div className={ hamburgerClasses } onClick={ props.clicked }>
      <div></div>
      <svg x='0px' y='0px' width='50px' height='50px' viewBox='0 0 50 50'>
        <circle 
          cx='25' cy='25' r='24'
          fill='transparent' stroke='#fff' strokeWidth='2' 
          strokeDasharray='157 157' strokeDashoffset='157'>
        </circle>
      </svg>   
    </div>
  );
};

export default Hamburger;
