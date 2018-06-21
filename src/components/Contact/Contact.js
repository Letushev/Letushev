import React, { Component } from 'react';
import axios from 'axios';

import styles from './Contact.scss';

import Button from '../UI/Button/Button';
import TextInput from '../UI/TextInput/TextInput';
import Loader from '../UI/Loader/Loader';
import Wrapper from '../../hoc/Wrapper';

import { checkControlValidity } from '../../shared/helpers';
import danceImg from '../../assets/images/dance.svg';

class Contact extends Component {
  state = {
    success: false,
    error: null,
    loading: false,
    formIsValid: false,
    controls: [
      {
        elementType: 'input',
        config: {
          name: 'name',
          id: 'name',
          type: 'text',
          value: ''
        },
        label: 'Name',
        validationRules: {
          required: true,
          minLength: 3,
          maxLength: 75
        },
        valid: false,
        touched: false,
        error: 'Must contain 3 - 75 characters'
      },
      {
        elementType: 'input',
        config: {
          name: 'email',
          id: 'email',
          type: 'email',
          value: ''
        },
        label: 'Email',
        validationRules: {
          required: true,
          isEmail: true,
          maxLength: 100
        },
        valid: false,
        touched: false,
        error: 'Wrong email format'
      },
      {
        elementType: 'textarea',
        config: {
          name: 'message',
          id: 'message',
          value: ''
        },
        label: 'Message',
        validationRules: {
          required: true
        },
        valid: false,
        touched: false,
        error: 'Can`t be empty'
      }
    ]
  }

  onControlChange = (event, controlId) => {
    const updatedControls = [ ...this.state.controls ];
    const control = updatedControls.find(control => {
      return control.config.id === controlId;
    });
    const updatedControl = { ...control };
    const updatedConfig = { ...updatedControl.config };

    updatedConfig.value = event.target.value;
    updatedControl.config = updatedConfig;
    updatedControl.valid = checkControlValidity(event.target.value, updatedControl.validationRules);
    updatedControl.touched = true;
    updatedControls[updatedControls.indexOf(control)] = updatedControl;
    
    let formIsValid = true;
    updatedControls.forEach(control => {
      formIsValid = control.valid && formIsValid;
    });

    this.setState({ controls: updatedControls, formIsValid: formIsValid });
  }

  onMessageSend = event => {
    event.preventDefault();

    this.setState({ loading: true });

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    axios.post('https://usebasin.com/f/c41e54f9476a', {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }, headers)
      .then(() => {
        this.setState({ loading: false, success: true });
      })
      .catch(() => {
        const message = 'Oops, some troubles with sending messsage. Please try again later.';
        this.setState({ loading: false, error: message });
      });
  }

  render () {
    const successMessage = (
      <div className={ styles['success-message'] }>
        <img src={ danceImg } alt='happy dancing people' />
        <p>Thank you! <br /> Your message has been sent successfully.</p>
      </div>
    );

    const contactForm = (
      <Wrapper>
        <h1 className={ styles['heading'] }>Get in touch</h1>
        <form onSubmit={ this.onMessageSend } >
          {
            this.state.controls.map(control => (
              <TextInput
                key={ control.config.id }
                elementType={ control.elementType }
                config={ control.config }
                label={ control.label }
                valid={ control.valid }
                touched={ control.touched }
                changed={ event => this.onControlChange(event, control.config.id) }
                error={ control.error }
              />
            ))
          }
          { 
            this.state.error ? 
              <p className={ styles['error'] }>
                { this.state.error }
              </p> : 
              null 
          }
          <Button type='colorful' disabled={ !this.state.formIsValid }>Send</Button>
        </form>
      </Wrapper>
    );

    return (
      this.state.loading ? <Loader /> :
      <section className={ styles['contact'] + ' fadeIn' }>
        { this.state.success ? successMessage : contactForm }
      </section>
    );
  }
}

export default Contact;
