import React from 'react';
import Wrapper from '../../../hoc/Wrapper';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => (
  <Wrapper>
    <NavigationItem linkTo='/' clicked={ props.navItemClicked }>Home</NavigationItem>
    <NavigationItem linkTo='/work' clicked={ props.navItemClicked }>Work</NavigationItem>
    <NavigationItem linkTo='/about' clicked={ props.navItemClicked }>About</NavigationItem>
    <NavigationItem linkTo='/contact' clicked={ props.navItemClicked }>Contact</NavigationItem>
  </Wrapper>
);

export default NavigationItems;
