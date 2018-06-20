import React, { Component } from 'react';
import styles from './Contact.scss';
import axios from 'axios';
import Button from '../UI/Button/Button';
import TextInput from '../UI/TextInput/TextInput';
import { checkControlValidity } from '../../shared/helpers';
import Loader from '../UI/Loader/Loader';

class Contact extends Component {
  state = {
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

    axios.post('https://usebasin.com/f/c41e54f9476a.json', {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    }, headers)
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  render () {
    return (
      this.state.loading ? <Loader /> :
      <section className={ styles['contact'] + ' fadeIn' }>
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
          <Button type='colorful' disabled={ !this.state.formIsValid }>Send</Button>
        </form>
      </section>
    );
  }
}

export default Contact;
