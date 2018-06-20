import React from 'react';
import photo from '../../assets/images/photo.jpg';
import styles from './About.scss';
import withImagesLoading from '../../hoc/withImagesLoading';


const About = () => {
  return (
    <section className={ styles['about'] + ' fadeIn' }>
      <h1 className={ styles['heading'] }>About</h1>
      <div className={ styles['info'] }>
        <img src={ photo } alt='personal portrait' />
        <div>
          <p>Hi! My name is Olexiy Letushev. I am a 19-year-old student 
          in the Faculty of Computer Science and Cybernetics 
          at Taras Shevchenko National University of Kyiv.</p>
          <p>Since my childhood, I have been extremely interested in painting.
          At the beginning I drew dragons with a simple pencil,
          next - some portraits of people and finally - nature using gouache.</p>
          <p>I decided to enter the Cybernetics department, because in school 
          I was good at math and physics. At university I fell in love with programming, 
          but I missed creating something breautiful, so I started to search something 
          that combines programming with painting.
          That is how I began my journey as a front-end developer.
          <br />
          Since then, due to my curiosity and hard-working character I have been learning
          new skills and techniques as well as practicing a lot every day.
          I wrote some simple landing pages using HTML5 & CSS3 from psd mockups, 
          then started to learn native JavaScript and dived into core functionality of the language.
          Recently, I finished Kottans front-end course, where 
          I built some vanilla JS SPA`s with SASS, Webpack and many other features.
          Finally I started to learn React and Redux.
          Now, I know that it`s only the beginning, 
          but my passion to web developing is growing every day.</p>
          <p>In my spare time, I like playing basketball and guitar.
          My dream is to travel a lot and teach other people. 
          At the moment I am available to be hired as an active employee. 
          Feel free to contact me!</p>
        </div>
      </div>
    </section>
  )
};

export default withImagesLoading(About, [photo]);
