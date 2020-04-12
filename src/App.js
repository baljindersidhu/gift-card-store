import React from 'react';
import './App.css';

import ApplicationRoutes from './routes/Routes';
import { BrowserRouter as Router } from 'react-router-dom';

export default class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Router>
            <ApplicationRoutes></ApplicationRoutes>
        </Router>
      </div>
    )
  }
}
