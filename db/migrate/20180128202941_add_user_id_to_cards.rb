class AddUserIdToCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :user_id, :int
  end
end
