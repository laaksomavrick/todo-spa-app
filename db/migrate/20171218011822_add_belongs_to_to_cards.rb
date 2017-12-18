class AddBelongsToToCards < ActiveRecord::Migration[5.1]
  def change
    add_reference :cards, :boards, index: true
  end
end
