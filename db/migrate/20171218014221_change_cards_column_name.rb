class ChangeCardsColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :cards, :boards_id, :board_id
  end
end
