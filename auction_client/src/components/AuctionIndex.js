import React, {Component} from "react";
import {Auction} from "../requests";
import {Link} from "react-router-dom";

class AuctionIndex extends Component {
  constructor(props){
    super(props);
    this.state = {auctions:[]}
  }
  componentDidMount(){
    Auction.all().then(auctions => this.setState({auctions: auctions}))
  }
  render(){
    return(
      <main>
        <h1>Auctions</h1>
        <ul>
        {
          this.state.auctions.map(auction => 
            <li key={auction.id}>
            <Link to={`/auctions/${auction.id}`}><h4>{auction.title}</h4></Link>
            <small>Auction Started: {(auction.created_at).toString()}</small>
            </li>
            )
        }
        </ul>
      </main>
    )
  }
}

export default AuctionIndex;