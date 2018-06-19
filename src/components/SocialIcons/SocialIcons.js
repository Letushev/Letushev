import React from 'react';
import styles from './SocialIcons.scss';

const SocialIcons = props => (
  <ul className = { styles['icons-list'] }>
    <li>
      <a 
        href='https://www.facebook.com/people/Olexiy-Letushev/100014824307047' 
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fab fa-facebook-square fa-2x"></i>
      </a>
    </li>
    <li>
      <a 
        href='https://github.com/Letushev'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fab fa-github fa-2x"></i>
      </a>
    </li>
    <li>
      <a 
        href='https://www.linkedin.com/in/olexiy-letushev/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className="fab fa-linkedin fa-2x"></i>
      </a>
    </li>
  </ul>
);

export default SocialIcons;
