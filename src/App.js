import React from 'react';
import './App.css';

import Header from './components/Header';
import Tasks from './components/Tasks';

class App extends React.Component {
 
  render() {
      return (
          <div>
            <Header />
            <Tasks />
          </div>
      );
  }
}


export default App;
