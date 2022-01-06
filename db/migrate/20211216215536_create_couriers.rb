class CreateCouriers < ActiveRecord::Migration[6.1]
  def change
    create_table :couriers do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :address
      t.integer :rating

      t.timestamps
    end
  end
end
