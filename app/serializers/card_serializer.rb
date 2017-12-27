class CardSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :board_id
end
