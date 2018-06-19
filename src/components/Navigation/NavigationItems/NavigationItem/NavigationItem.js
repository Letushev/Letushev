import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.scss';

const NavigationItem = props => (
  <NavLink
    exact
    to={ props.linkTo }
    className={ styles['item'] }
    activeClassName={ styles['item--active'] }
    data-hover={ props.children }
    onClick={ props.clicked }
  >
    { props.children }
  </NavLink>
);

export default NavigationItem;