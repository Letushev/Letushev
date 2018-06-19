import React from 'react';
import styles from './Sidebar.scss';
import classNames from 'classnames/bind';
import NavigationItems from '../NavigationItems/NavigationItems';
import SocialIcons from '../../SocialIcons/SocialIcons';

const classes = classNames.bind(styles);

const Sidebar = props => {
  const sidebarClasses = classes('sidebar', {
    'sidebar--hidden': !props.visible
  });

  return (
    <div className={ sidebarClasses }>
      <div className={ classes('navigation-wrapper') }>
        <h1>Navigation</h1>
        <nav>
          <NavigationItems navItemClicked={ props.navItemsClicked } />
        </nav>
      </div>
      <div className={ classes('extra-wrapper') }>
        <SocialIcons />
        <p>
          If you would like to see the code of this website, please visit 
          <a href='https://github.com/Letushev/letushev'> this repository</a>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
