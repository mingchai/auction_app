Auction.destroy_all
User.destroy_all
Bid.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('auctions')
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('bids')

super_user = User.create(
    username: "test",
    email: "test@test.com",
    password: "test"
)

10.times do
  User.create( username:Faker::Internet.username, email: Faker::Internet.email, password:"1")
end
users = User.all

25.times do
  a = Auction.create(
    title: Faker::Commerce.product_name,
    description: Faker::IDNumber.valid,
    price: Faker::Commerce.price(range = 10.00..10000.00, as_string = false),
    reserve: ["true", "false"].sample,
    reserve_price: Faker::Commerce.price(range = 10.00..1000.00, as_string = false),
    expiry_date: Faker::Date.forward(60),
    user: users.sample
  )
  rand(1..10).times do
    a.bids << Bid.new(
      price: Faker::Commerce.price(range = 10.00..10000.00, as_string = false),
      user: users.sample
    )
  end
end
auctions = Auction.all
bids = Bid.all

p "Login with #{super_user.email} and password: #{super_user.password}"
p "Created #{users.count} user entries"
p "Created #{auctions.count} auction entries"
p "Created #{bids.count} bid entries"