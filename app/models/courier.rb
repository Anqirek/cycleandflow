class Courier < ApplicationRecord
has_many :items, dependent: :destroy
has_many :pickups
has_many :customers, through: :items

validates :name, presence: true
end
