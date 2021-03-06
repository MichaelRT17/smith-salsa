import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {routes}
        <Footer />
      </div>
    );
  }
}

export default App;
