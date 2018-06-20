import React, { Component } from 'react';
import Loader from '../components/UI/Loader/Loader';

const asyncComponent = importComponent => {
  return class extends Component {
    state = {
      component: null
    }

    componentDidMount() {
      importComponent()
        .then(component => {
          this.setState({ component: component.default });
        });
    }

    render() {
      const C = this.state.component;
      return C ? <C { ...this.props } /> : <Loader />
    }
  };
};

export default asyncComponent;
