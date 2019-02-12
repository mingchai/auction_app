import React, {Component} from "react";
import Auction from "../requests"

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
        <h1>Auction Index</h1>
        {
          this.state.auctions.map(auction => 
            <h4>{auction.title}</h4>
            )
        }
      </main>
    )
  }
}

export default AuctionIndex;