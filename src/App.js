import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Expertise from './components/expertise';
import Badges from './components/badges';
import Project from './components/projects';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Sidebar/>
				<Introduction></Introduction>
				<About></About>
        <Project></Project>
        <Expertise></Expertise>
        <Badges></Badges>
      </div>
    );
  }
}

export default App;