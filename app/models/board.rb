class Board < ApplicationRecord
  has_many :cards, dependent: :destroy
end
