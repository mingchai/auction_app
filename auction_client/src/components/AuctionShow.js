import React, {Component} from "react";
import {Auction, Bid} from "../requests";
import AuctionDetails from "./AuctionDetails"
import CreateBid from "./CreateBid";
window.Bid = Bid
class AuctionShow extends Component {
  constructor(props){
    super(props);
    this.state = {auction: null, bids: [], loading: true}
  }

  componentDidMount(){
    let id = this.props.match.params.id
    Auction.one(id).then(auction => this.setState({auction: auction}))
    Bid.all(id).then(bids => this.setState({bids: bids, loading: false}))
  }

  render(){
    if (this.state.loading) {
      return (
        <div>
          <h2>Auction details loading...</h2>
        </div>
      );
    }
    const {auction} = this.state;
    const {bids} = auction;
    return(
      <main>
        <AuctionDetails {...this.state.auction} />
        <CreateBid  auctions = {this.state.auction}/>
        <br/>
        <h3>Bid History</h3>
        {this.state.bids.map(bid => 
          <>
          <li key={bid.id}>
          ${bid.price} on {bid.created_at}
          </li>
          <br/>
          </>
          )}
      </main>
    )
  }
}

export default AuctionShow;