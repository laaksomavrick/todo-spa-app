class User < ApplicationRecord

  has_secure_password

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

end
