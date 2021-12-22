class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.integer :count
      t.string :location
      t.belongs_to :customer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
