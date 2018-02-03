class User < ApplicationRecord

  after_create :create_default_board

  has_secure_password

  has_many :boards
  has_many :cards

  validates_length_of :password, maximum: 24, minimum: 8, allow_nil: true, allow_blank: false
  validates_confirmation_of :password, allow_nil: true, allow_blank: false

  before_validation {
    (self.email = self.email.to_s.downcase) && (self.username = self.username.to_s.downcase)
  }

  validates_presence_of :email
  validates_presence_of :username
  validates_uniqueness_of :email
  validates_uniqueness_of :username

  def can_modify_user?(user_id)
    id.to_s == user_id.to_s
  end

  def create_default_board
    Board.new({name: 'Home', user_id: self.id, is_default: true}).save
  end

end
