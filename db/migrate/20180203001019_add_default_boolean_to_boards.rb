class AddDefaultBooleanToBoards < ActiveRecord::Migration[5.1]
  def change
    add_column :boards, :is_default, :bool, :null => false, :default => false
  end
end
