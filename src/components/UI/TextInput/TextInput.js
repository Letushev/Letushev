import React from 'react';
import styles from './TextInput.scss';
import classNames from 'classnames/bind';

const classes = classNames.bind(styles);

const TextInput = props => {
  let textInput = null;
  let invalid = false;

  if (!props.valid && props.touched) {
    invalid = true;
  }

  const controlClasses = classes('control-container', {
    'control-container--error': invalid
  });

  switch (props.elementType) {
    case 'input':
      textInput = 
        <input 
          { ...props.config } 
          onChange={ props.changed }
        />;
      break;
    case 'textarea':
      textInput = 
        <textarea 
          { ... props.config } 
          onChange={ props.changed }
        ></textarea>;
      break;
    default:
      textInput = 
        <input 
          { ...props.config } 
          onChange={ props.changed }
        />;
  }

  return (
    <p className={ controlClasses }>
      <label htmlFor={ props.config.id }>
        { props.label }
      </label>
      { textInput }
      { 
        invalid ? 
          <span className={ classes('error-message') }>
            { props.error }
          </span> : 
          null }
    </p>
  );
};

export default TextInput;
