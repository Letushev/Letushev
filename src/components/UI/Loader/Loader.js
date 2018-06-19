import React from 'react';
import styles from './Loader.scss';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles);

const Loader = () => (
  <div className={ classes('loader') }>
    <div className={ classes('cube', 'cube1') }></div>
    <div className={ classes('cube', 'cube2')  }></div>
    <div className={ classes('cube', 'cube4')  }></div>
    <div className={ classes('cube', 'cube3')  }></div>
  </div>
);

export default Loader;
