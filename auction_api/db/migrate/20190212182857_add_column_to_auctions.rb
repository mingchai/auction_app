class AddColumnToAuctions < ActiveRecord::Migration[5.2]
  def change
    add_column :auctions, :reserve_price, :float
  end
end
