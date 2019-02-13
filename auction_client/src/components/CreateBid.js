import React, {Component} from "react";
import {Bid} from "../requests";

class CreateBid extends Component {
  constructor(props){
    super(props);
  }
  submitForm(event){
    event.preventDefault();
    const fD = new FormData(event.currentTarget);
    const newBid = {
      price: fD.get('price')
    }
    Bid.create(newBid).then(createdBid =>{this.props.history.push(`/auctions/${this.props.auctions.id}/${createdBid.id}`)})
  }

  render(){
    return(
      <div>
      <h1>Place a Bid</h1>
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>Price</label> <br/>
          <input type="number" name="price" />
        </div>
        <br/>
        <input type="submit" />
      </form>
    </div>
    )
  }
}

export default CreateBid;