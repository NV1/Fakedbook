class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :profile_id, null: false
      t.string :content, null: false
    
    end
    add_index :posts, :author_id
    add_index :posts, :profile_id
  end
end
