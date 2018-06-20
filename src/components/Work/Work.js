import React, { Component } from 'react';
import styles from './Work.scss';

import withImagesLoading from '../../hoc/withImagesLoading';
import Project from './Project/Project';

import burgerBuilderImg from '../../assets/images/burger-builder.png';
import pizzaFantasyImg from '../../assets/images/pizza-fantasy.png';
import weatherAppImg from '../../assets/images/weather-app.png';
import memoryPairGameImg from '../../assets/images/memory-pair-game.png';
import gustosoBakeryImg from '../../assets/images/gustoso-bakery.png';

class Work extends Component {
  state = {
    projects: [
      {
        name: 'Burger Builder',
        desc: 'React & Redux application for building and ordering tasty burgers',
        imgSrc: burgerBuilderImg,
        demoLink: 'https://burger-builder-5c675.firebaseapp.com/',
        sourceLink: 'https://github.com/Letushev/burger-builder',
      },
      {
        name: 'Pizza Fantasy',
        desc: 'JS SPA with Canvas drawings and realtime queue of pizzas',
        imgSrc: pizzaFantasyImg,
        demoLink: 'https://letushev.github.io/Pizza-Fantasy/',
        sourceLink: 'https://github.com/Letushev/Pizza-Fantasy'
      },
      {
        name: 'Weather App',
        desc: 'Current weather and forecast of any location with cool animated icons',
        imgSrc: weatherAppImg,
        demoLink: 'https://letushev.github.io/weather-app/',
        sourceLink: 'https://github.com/Letushev/weather-app/'
      },
      {
        name: 'Memory Pair Game',
        desc: 'Simple vanilla JS game to improve your memory with Star Wars',
        imgSrc: memoryPairGameImg,
        demoLink: 'https://letushev.github.io/Memory-Pair-Game/',
        sourceLink: 'https://github.com/Letushev/Memory-Pair-Game/'
      },
      {
        name: 'Gustoso Bakery',
        desc: 'Responsive HTML & CSS landing page of bakery',
        imgSrc: gustosoBakeryImg,
        demoLink: 'https://letushev.github.io/Gustoso-Bakery/',
        sourceLink: 'https://github.com/Letushev/Gustoso-Bakery/'
      }
    ]
  }

  render() {
    return (
      <section className={ styles['work-wrapper'] + ' fadeIn' }>
        <h1 className={ styles['heading'] }>Projects</h1>
        <div className={ styles['projects-container'] }>
          {
            this.state.projects.map(project => (
              <Project
                key={ project.name } 
                { ...project } />
            ))
          }
        </div>
      </section>
    );
  }
}

export default withImagesLoading(Work, [
  burgerBuilderImg,
  pizzaFantasyImg,
  weatherAppImg,
  memoryPairGameImg,
  gustosoBakeryImg
]);
