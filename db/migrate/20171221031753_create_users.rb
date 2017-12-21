class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: true, unique: true
      t.string :email, null: false, index: true, unique: true
      t.string :password_digest
      t.datetime :last_login
      t.timestamps
    end
  end
end
