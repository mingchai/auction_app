class BidsController < ApplicationController
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

  private

  def bid_params
    params.require(:bid).permit(:price)
  end
end
