class BoardIdInCardIsNotNull < ActiveRecord::Migration[5.1]
  def change
    change_column_null :cards, :boards_id, false
  end
end
