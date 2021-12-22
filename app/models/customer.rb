class Customer < ApplicationRecord
    has_many :items, dependent: :destroy
    has_many :couriers, through: :items

    validates :name, :email, presence: true
end
