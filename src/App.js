import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Sidebar/>
					<Introduction></Introduction>
					<About></About>
      </div>
    );
  }
}

export default App;