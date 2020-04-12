import React from 'react';
import './App.css';

import HomePage from './components/home-page/HomePage';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <HomePage/>
      </div>
    )
  }
}
