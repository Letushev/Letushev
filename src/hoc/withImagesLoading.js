import React, { Component } from 'react';
import Loader from '../components/UI/Loader/Loader';

const withImagesLoading = (WrappedComponent, images) => {
  return class extends Component {
    state = {
      loading: true
    }

    componentDidMount() {
      const promises = [];
      images.forEach(image => {
        promises.push(this.loadImage(image));
      });
      Promise.all(promises)
        .then(() => {
          this.setState({ loading: false });
        });
    }
  
    loadImage(image) {
      return new Promise(resolve => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(img);
      });
    }

    render() {
      return this.state.loading ? 
        <Loader /> : 
        <WrappedComponent { ...this.props } />;
    }
  };
};

export default withImagesLoading;
