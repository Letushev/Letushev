import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import styles from './App.scss';
import classNames from 'classnames/bind';

import Wrapper from '../../hoc/Wrapper';
import asyncComponent from '../../hoc/asyncComponent';
import Hamburger from '../../components/Navigation/Hamburger/Hamburger';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';
import Home from '../../components/Home/Home';

const Work = asyncComponent(() => import('../../components/Work/Work'));
const About = asyncComponent(() => import('../../components/About/About'));
const Contact = asyncComponent(() => import('../../components/Contact/Contact'));

const classes = classNames.bind(styles);

class App extends Component {
  state = {
    sidebarIsShown: false
  }

  toggleSidebar = () => {
    this.setState(prevState => ({ sidebarIsShown: !prevState.sidebarIsShown }));
  }

  render() {
    const mainClasses = classes('main', {
      'main--hidden': this.state.sidebarIsShown
    });

    return (
      <Wrapper>  
        <Hamburger arrow={ this.state.sidebarIsShown } clicked={ this.toggleSidebar } />
        <main className={ mainClasses }>
          <Switch>
            <Route 
              exact 
              path='/' 
              render={ () => <Home sidebarIsShown={ this.state.sidebarIsShown} /> } 
            />
            <Route path='/work' component={ Work } />
            <Route path='/about' component={ About } />
            <Route path='/contact' component={ Contact } />
            <Redirect to='/' />
          </Switch>
        </main>
        <Sidebar visible={ this.state.sidebarIsShown } navItemsClicked={ this.toggleSidebar } />
      </Wrapper>
    );
  }
}

export default App;
