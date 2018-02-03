class BoardSerializer < ActiveModel::Serializer
  attributes :id, :name, :created_at, :user_id, :is_default
end
