import React, { Component } from 'react';

class Contact extends Component {
  state = {
    
  }
  onSubmit(event) {
    event.preventDefault();
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch("https://usebasin.com/f/c41e54f9476a.json", {
      method: 'POST',
      body: JSON.stringify({
        message: 'hi',
        email: 'o.m.letushev@gmail.com'
      }),
      headers
    }).then(response => response.json())
      .then(console.log);
  }

  render () {
    return (
      <form onSubmit={ this.onSubmit } >
        <label for="email-address">Email Address</label>
        <input type="email" id="email" name="email" required />
  
        <textarea rows="4" cols="50" name="comment" required>
        </textarea>
  
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Contact;
