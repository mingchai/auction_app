import React from "react";

const AuctionDetails = props => {
  window.props = props
  return(
    <div>
      <h1>Auction Details</h1>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>${props.price}</p>
      <small>Created: {props.created_at}</small>
      {props.bids}
    </div>
  )
}

export default AuctionDetails;