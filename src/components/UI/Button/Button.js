import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles);

const Button = props => {
  const buttonClasses = classes('button', {
    'button--colorful': props.type === 'colorful'
  });

  return (
    <button
      className={ buttonClasses }
      onClick={ props.clicked }
      disabled={ props.disabled }
    >
      { props.children }
    </button>
  );
};

export default Button;
