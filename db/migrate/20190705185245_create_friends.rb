class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :user_one_id
      t.integer :user_two_id
      t.boolean :status
    end

    add_index :friends, :user_one_id
    add_index :friends, :user_two_id
  end
end
