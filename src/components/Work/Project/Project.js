import React from 'react';
import styles from './Project.scss';

const Project = props => (
  <div className={ styles['project'] }>
    <img src={ props.imgSrc } alt=""/>

    <figcaption>
      <h2>{ props.name }</h2>
      <p>{ props.desc }</p>
    </figcaption>

    <div className={ styles['links'] }>
      <a href={ props.sourceLink }>
        <i className="fab fa-github fa-lg"></i>
      </a>
      <a href={ props.demoLink }>
        <i className="fas fa-desktop fa-lg"></i>
      </a>
    </div>
</div>
);

export default Project;
