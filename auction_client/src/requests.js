const BASE_URL = "http://localhost:3000";

const Auction = {
  all(){
    return fetch(`${BASE_URL}/auctions`, {credentials:'include'}).then(res => res.json())
  },
  one(id){
    return fetch(`${BASE_URL}/auctions/${id}`, {credentials: "include"}).then(res => res.json())
  }
}

const Bid = {
  all(id){
    return fetch(`${BASE_URL}/auctions/${id}/bids`, {credentials: "include"}).then(res => res.json())
  }
}

const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json());
  }
}

const User = {
  current(){
    return fetch(`${BASE_URL}/users/current`, {
     credentials:"include"
    }).then(res => res.json());
  }
}

export {Auction, Bid, Session, User};