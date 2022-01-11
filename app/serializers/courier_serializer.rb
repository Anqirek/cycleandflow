class CourierSerializer < ActiveModel::Serializer
  attributes :id,:name,:email,:address,:password
end
