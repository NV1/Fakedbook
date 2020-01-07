class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name, null:false
      t.string :last_name, null:false
      t.string :email, null:false
      t.string :password_digest, null:false
      t.string :session_token, null:false
      t.string :bio
      t.datetime :birthday, null:false
      t.string :location
      t.string :workplace
      t.string :hometown
      t.string :relationship

      t.timestamps

    end

    add_index :users, :first_name
    add_index :users, :last_name 
    add_index :users, :email, unique:true
  end
end
