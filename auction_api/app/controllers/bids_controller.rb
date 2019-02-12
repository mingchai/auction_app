class BidsController < ApplicationController
  before_action :authenticate_user!, only: [:create]
  def create
    bid = Bid.new bid_params
    bid.user = current_user
    bid.auction = Auction.find params[:auction_id]
    if bid.save!
      render json: {id: bid.id}
    else
      render json: {errors: bid.errors}, status: 422
    end
  end

  def index
    auction = Auction.find params[:auction_id]
    bids = auction.bids.order(created_at: :desc, price: :asc)
    render json: bids
  end

  private

  def bid_params
    params.require(:bid).permit(:price)
  end
end
