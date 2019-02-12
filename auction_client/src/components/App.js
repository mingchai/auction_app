import React, { Component } from 'react';
import '../App.css';
import WelcomePage from './WelcomPage';
import AuctionIndex from './AuctionIndex';

class App extends Component {
  render() {
    return (
      <main>
        <WelcomePage/>
        <AuctionIndex/>
      </main>
    );
  }
}

export default App;
