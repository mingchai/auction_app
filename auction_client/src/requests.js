const BASE_URL = "http://localhost:3000";

const Auction = {
  all(){
    return fetch(`${BASE_URL}/auctions`, {credentials:'include'}).then(res => res.json())
  }
}

export default Auction;