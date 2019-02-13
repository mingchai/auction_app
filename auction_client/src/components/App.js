import React, { Component } from 'react';
import '../App.css';
import WelcomePage from './WelcomPage';
import AuctionIndex from './AuctionIndex';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import AuctionShow from './AuctionShow';
import SignInPage from "./SignInPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <main>
        <NavBar/>
        <Switch>
        <Route path = "/" exact render={WelcomePage}/>
        <Route path = "/auctions" exact component={AuctionIndex}/>
        <Route path = "/auctions/:id" component={AuctionShow}/>
        <Route path = "/sign_in" exact component={SignInPage}/>
        <AuctionIndex/>
        </Switch>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
