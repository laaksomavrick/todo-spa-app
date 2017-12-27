class SetUseridNotNullBoards < ActiveRecord::Migration[5.1]
  def change
    change_column_null :boards, :user_id, false, 1
  end
end
