class AuctionsController < ApplicationController
  def create
    
  end
  def show
    
  end
  def index
    auctions = Auction.all.order(created_at: :desc)
    render json: auctions
  end
end
