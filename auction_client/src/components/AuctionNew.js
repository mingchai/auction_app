import React, {Component} from "react";
import {Auction} from "../requests";

class AuctionNew extends Component {
  submitForm(event){
    event.preventDefault();
    const fD = new FormData(event.currentTarget);
    const newAuction = {
      title: fD.get('title'),
      description: fD.get('description'),
      price: fD.get('price'),
      reserve_price: fD.get('reserve_price'),
      expiry_date: fD.get('expiry_date')
    }
    Auction.create(newAuction).then(createdAuction =>{this.props.history.push(`/products/${createdAuction.id}`)})
  }

  render(){
    return(
      <div>
      <h1>Create an Auction</h1>
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>Title</label> <br/>
          <input type="text" name="title" />
        </div>
        <div>
          <label>Description</label> <br/>
          <textarea name="description" />
        </div>
        <div>
          <label>Price</label> <br/>
          <input type="number" name="price" />
        </div>
        <div>
          <label>Reserve</label> <br/>
          <input type="number" name="reserve_price" />
        </div> 
        <div>
          <label>Expiry</label> <br/>
          <input type="date" name="expiry_date" />
        </div> 
        <br/>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

export default AuctionNew;