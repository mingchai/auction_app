import React, { Component } from 'react';
import '../App.css';
import WelcomePage from './WelcomPage';
import AuctionIndex from './AuctionIndex';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./NavBar";
import AuctionShow from './AuctionShow';
import SignInPage from "./SignInPage";
import {User, Session} from "../requests";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentUser: null};
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  getCurrentUser(){
    User.current().then(data =>{
        const {name: currentUser} = data;
        if(currentUser){this.setState({currentUser})};
    })
  }

  componentDidMount(){
    this.getCurrentUser()
  }

  destroySession(){
    this.setState({currentUser: null});
    Session.destroy();
  }

  render() {
    const {currentUser} = this.state;
    return (
      <BrowserRouter>
      <main>
        <NavBar currentUser = {currentUser} onSignOut = {this.destroySession}/>
        <Switch>
        <Route path = "/sign_in" exact render={routeProps => <SignInPage {...routeProps} onSignIn = {this.getCurrentUser}/>}/>
        <Route path = "/" exact render={WelcomePage}/>
        <Route path = "/auctions" exact component={AuctionIndex}/>
        <Route path = "/auctions/:id" component={AuctionShow}/>
        <AuctionIndex/>
        </Switch>
      </main>
      </BrowserRouter>
    );
  }
}

export default App;
