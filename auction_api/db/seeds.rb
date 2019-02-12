Auction.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('auctions')

25.times do
  Auction.create(
    title: Faker::Commerce.product_name,
    description: Faker::IDNumber.valid,
    price: Faker::Commerce.price(range = 10.0..10000.0, as_string = false),
    reserve: ["true", "false"].sample,
    expiry_date: Faker::Date.forward(60)
  )
end
auctions = Auction.all

p "Created #{auctions.count} auction entries"